import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "_content");

interface ImarkDown {
  title: string;
  date: string;
  tags: Array<string>;
}

export interface IallPosts {
  title: string;
  slug: string;
}

export interface IpostData extends ImarkDown {
  content: string;
}

const readMarkDown = (fileName: string): ImarkDown => {
  const fullPath = path.join(contentDirectory, fileName);

  const fileContent = fs.readFileSync(fullPath, "utf8");

  // get the content of .md file using matter
  const { data } = matter(fileContent);

  return data as ImarkDown;
};

export const getAllPosts = (): IallPosts[] => {
  const allContents = fs.readdirSync(contentDirectory);

  const allPosts = allContents.map((fileName) => {
    const { title } = readMarkDown(fileName);
    const slug = fileName.replace(".md", "");
    return { title, slug };
  });

  return allPosts;
};

export const getAllSlugs = (): Array<string> => {
  const allFiles = fs.readdirSync(contentDirectory);

  const allSlugs = allFiles.map((file) => file.replace(".md", ""));

  return allSlugs;
};

export const getPostData = async (slug: string): Promise<IpostData> => {
  const file = path.join(contentDirectory, `${slug}.md`);

  const fileData = fs.readFileSync(file, "utf8");

  const fileMatter = matter(fileData);

  // with remark, converts markdown to html
  const fileContent = await remark().use(html).process(fileMatter.content);

  const postDataJson = {
    ...fileMatter.data,
    date: fileMatter.data.date.toISOString(),
    content: fileContent.toString(),
  };

  return postDataJson as IpostData;
};
