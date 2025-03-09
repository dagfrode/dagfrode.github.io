import { contentPaths } from "@/app/content-paths";
import fs from "fs/promises";
import { marked } from "marked";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import path from "path";

import "./main.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function pathToSlug(path: string) {
  const p = path
    .replace(/index\.md$/, "")
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

      return { props: { content, slug: params?.slug } };
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

type Mode = "auto" | "light-mode" | "dark-mode";

export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let storedMode: Mode | null = null;

  useEffect(() => {
    storedMode = window?.localStorage?.getItem("mode") as Mode | null;
    setMode(storedMode ?? "auto");
  }, []);
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.classList.remove("auto", "light-mode", "dark-mode");
    document.body.classList.add(mode);
  }, [mode]);

  const router = useRouter();
  const slug = router.query.slug;
  if (!content) {
    return <div>Loading...</div>;
  }

  function toggleMode() {
    switch (mode) {
      case "auto":
        setMode("light-mode");
        break;
      case "light-mode":
        setMode("dark-mode");
        break;
      case "dark-mode":
        setMode("auto");
        break;
    }
  }

  console.log("slug", slug);

  let currentPath = "";
  const breadcrombs =
    (slug as string[])?.map((s, i) => {
      currentPath += "/" + s;
      return {
        name: capitalizeFirstLetter(s),
        path: currentPath,
        last: slug?.length === i + 1,
      };
    }) ?? [];

  breadcrombs.unshift({ name: "Home", path: "/", last: false });

  return (
    <>
      <header>
        <h1>My Blog</h1>
        <button onClick={toggleMode}>{mode}</button>
        <nav className="breadcrumbs">
          {breadcrombs.length > 1 && (
            <ul>
              {breadcrombs.map((b) => (
                <li key={b.name}>
                  {b.last ? b.name : <Link href={b.path}>{b.name}</Link>}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </main>
      <footer></footer>
    </>
  );
}

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
