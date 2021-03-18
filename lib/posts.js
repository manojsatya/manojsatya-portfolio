import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export const getAllPosts = () => {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => readMarkDown(fileName));
};

const readMarkDown = (fileName) => {
  const fullPath = path.join(contentDirectory, fileName);

  const fileContent = fs.readFileSync(fullPath, "utf8");

  const slug = fileName.replace(".md", "");

  const { data, content } = matter(fileContent);

  const dateFormatted = data.date.toISOString();

  return { ...data, content, slug, date: dateFormatted };
};
