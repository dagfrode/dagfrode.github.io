const fs = require("fs");
const path = require("path");

// Function to get all file paths recursively
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
      // Only include .md files
      if (filePath.endsWith(".md")) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Define the content directory and the output file path
const contentDir = path.join(__dirname, "public", "content");
const outputFilePath = path.join(__dirname, "app", "content-paths.ts");

// Get all file paths
const filePaths = getAllFilePaths(contentDir);

// Convert absolute paths to relative paths from the content directory
const relativePaths = filePaths.map((filePath) =>
  path.relative(contentDir, filePath).replace(/\\/g, "/")
);

// Generate the TypeScript content
const tsContent = `// This file is auto-generated
export const contentPaths = ${JSON.stringify(relativePaths, null, 2)};
`;

// Write the TypeScript content to the output file
fs.writeFileSync(outputFilePath, tsContent, "utf8");

console.log(
  `${relativePaths.length} markdown files have been written to ${outputFilePath}`
);
