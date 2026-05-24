const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "public", "content");
const outputFilePath = path.join(__dirname, "app", "content-paths.ts");

function getAllFilePaths(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fileList = getAllFilePaths(filePath, fileList);
    } else {
      if (filePath.endsWith(".md")) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function generate() {
  const filePaths = getAllFilePaths(contentDir);
  const relativePaths = filePaths.map((filePath) =>
    path.relative(contentDir, filePath).replace(/\\/g, "/")
  );
  const tsContent = `// This file is auto-generated
export const contentPaths = ${JSON.stringify(relativePaths, null, 2)};
`;
  fs.writeFileSync(outputFilePath, tsContent, "utf8");
  console.log(
    `${relativePaths.length} markdown files have been written to ${outputFilePath}`
  );
}

generate();

if (process.argv.includes("--watch")) {
  console.log(`[content-paths] watching ${contentDir}`);
  let debounce = null;
  fs.watch(contentDir, { recursive: true }, (eventType, filename) => {
    if (!filename?.endsWith(".md")) return;
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      console.log(`[content-paths] ${eventType}: ${filename}`);
      generate();
    }, 100);
  });
}
