import { contentPaths } from "@/app/content-paths";
import fs from "fs/promises";
import { marked } from "marked";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import path from "path";

function pathToSlug(path: string) {
  const p = path
    .replace(/\/index\.md$/, "")
    .replace(/\.md$/, "")
    .split("/");
  return p;
}

export async function getStaticPaths() {
  return {
    paths: contentPaths.map((path) => {
      return {
        params: {
          slug: pathToSlug(path),
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = (async ({ params }: GetStaticPropsContext) => {
  try {
    // Build the file path to read from public/content directory
    const filePath = path.join(
      process.cwd(),
      "public",
      "content",
      Array.isArray(params?.slug) ? params.slug.join("/") + ".md" : "index.md"
    );

    // Read the file contents
    const content = await fs.readFile(filePath, "utf8");

    return { props: { content } };
  } catch (error) {
    console.log(error);
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        "content",
        Array.isArray(params?.slug)
          ? params.slug.join("/") + "/index.md"
          : params?.slug + "/index.md"
      );

      // Read the file contents
      const content = await fs.readFile(filePath, "utf8");

      return { props: { content } };
    } catch (error) {
      console.log(error);
      return {
        notFound: true,
      };
    }
  }
}) satisfies GetStaticProps<{
  content: string;
}>;

export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
