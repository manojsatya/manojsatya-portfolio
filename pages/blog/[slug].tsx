import { getPostData, getAllSlugs, IpostData } from "../../lib/posts";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Prism from "prismjs";

interface Props {
  postData: IpostData;
}

export default function BlogPage({ postData }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { title, tags, date, content } = postData;

  return (
    <div className="prose">
      <h1>{title}</h1>
      <div>{tags}</div>
      <div>{date}</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug as string);
  return {
    props: { postData }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getAllSlugs().map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false, // See the "fallback" section below
  };
};
