import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export function getAllPostIds() {
  const fileNames = fs.readdirSync("markdown/blog");

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getAllPostTileData() {
  const fileNames = fs.readdirSync("markdown/blog");

  const params = [];
  for (const id of fileNames) {
    const fullPath = path.join("markdown/blog", id);
    const fileContents = await fs.readFileSync(fullPath, "utf8");
    const matterResult = await matter(fileContents);
    params.push({ ...matterResult.data, id });
  }

  return params;
}

export async function getPostData(id: string) {
  const fullPath = path.join("markdown/blog", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
