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
import { useEffect, useRef, useState, type ReactNode } from "react";

function pathToSlug(p: string) {
  return p
    .replace(/index\.md$/, "")
    .replace(/\.md$/, "")
    .split("/");
}

function virtualFolderSlugs(): string[][] {
  const result: string[][] = [];
  contentPaths.forEach((p) => {
    const parts = p.split("/");
    for (let i = 1; i < parts.length; i++) {
      const folder = parts.slice(0, i).join("/");
      const hasIndex =
        contentPaths.includes(folder + "/index.md") ||
        contentPaths.includes(folder + ".md");
      if (!hasIndex) {
        result.push(folder.split("/"));
      }
    }
  });
  // deduplicate
  const seen = new Set<string>();
  return result.filter((s) => {
    const key = s.join("/");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function getStaticPaths() {
  const contentSlugPaths = contentPaths.map((p: string) => ({
    params: { slug: pathToSlug(p) },
  }));
  const folderPaths = virtualFolderSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths: [...contentSlugPaths, ...folderPaths],
    fallback: false,
  };
}

export const getStaticProps = (async ({ params }: GetStaticPropsContext) => {
  const slugArray = Array.isArray(params?.slug) ? params.slug : [];

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "content",
      slugArray.length ? slugArray.join("/") + ".md" : "index.md"
    );
    const raw = await fs.readFile(filePath, "utf8");
    const content = await marked(raw);
    return { props: { content: content.replaceAll("<a", '<a onclick="nextPush(this,event);" ') } };
  } catch {
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        "content",
        slugArray.length ? slugArray.join("/") + "/index.md" : "index.md"
      );
      const raw = await fs.readFile(filePath, "utf8");
      const content = await marked(raw);
      return { props: { content: content.replaceAll("<a", '<a onclick="nextPush(this,event);" '), slug: params?.slug } };
    } catch {
      // Virtual folder: redirect to parent
      const currentPath = slugArray.join("/");
      const hasChildren = contentPaths.some((p: string) =>
        p.startsWith(currentPath + "/")
      );
      if (hasChildren) {
        const parentSlug = slugArray.slice(0, -1);
        const parentPath = parentSlug.length ? "/" + parentSlug.join("/") : "/";
        const content = `<meta http-equiv="refresh" content="0; url=${parentPath}"><script>location.replace('${parentPath}')</script>`;
        return { props: { content } };
      }
      return { notFound: true };
    }
  }
}) satisfies GetStaticProps<{
  content: string;
}>;

type Mode = "auto" | "light-mode" | "dark-mode";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const modeLabel: Record<Mode, { icon: ReactNode; text: string; label: string }> = {
  auto: { icon: <SystemIcon />, text: "Auto", label: "Auto (follows system)" },
  "light-mode": { icon: <SunIcon />, text: "Light", label: "Light mode" },
  "dark-mode": { icon: <MoonIcon />, text: "Dark", label: "Dark mode" },
};

export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const storedMode = useRef<Mode | null>(null);

  useEffect(() => {
    storedMode.current = window?.localStorage?.getItem("mode") as Mode | null;
    setMode(storedMode.current ?? "auto");
    //@ts-expect-error not now
    window.nextPush = (element: HTMLAnchorElement, event: MouseEvent) => {
      event.preventDefault();
      router.push(element.href);
    };
  }, []);
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.documentElement.classList.remove("auto", "light-mode", "dark-mode");
    document.documentElement.classList.add(mode);
  }, [mode]);

  const router = useRouter();
  const slug = router.query.slug;
  const isHome = !slug;
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
        <h1>My Mind Cabin</h1>
        <button className="theme-toggle" onClick={toggleMode} title={modeLabel[mode].label}>
          {modeLabel[mode].icon}
          <span>{modeLabel[mode].text}</span>
        </button>
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
      <main className={isHome ? "home" : undefined}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <footer></footer>
    </>
  );
}

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
