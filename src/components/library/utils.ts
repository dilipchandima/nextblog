import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import fs from "fs";
import path from "path";

export const getAllMarkdownFileNames = (folderName: string) => {
  const fileNames = fs.readdirSync(`markdown/${folderName}`);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

export const readSingleMarkdownDoc = async (
  folderName: string,
  fileName: string
) => {
  const fullPath = path.join(`markdown/${folderName}`, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id: fileName,
    folderName,
    contentHtml,
    ...matterResult.data,
    date: moment(matterResult.data.date, "DD/MM/YYYY").format("MMM DD yyyy"),
  };
};

export const getAllMarkdownDocMeta = async (
  folderName: string,
  count = 100
): Promise<any[]> => {
  const fileNames = getAllMarkdownFileNames(folderName).slice(0, count);

  const params = [];

  for (const fileName of fileNames) {
    const fullPath = path.join(`markdown/${folderName}`, `${fileName}.md`);
    const fileContents = await fs.readFileSync(fullPath, "utf8");
    const matterResult = await matter(fileContents);
    params.push({
      ...matterResult.data,
      date: moment(matterResult.data.date, "DD/MM/YYYY").format("MMM DD yyyy"),
      id: fileName,
    });
  }

  return params;
};
