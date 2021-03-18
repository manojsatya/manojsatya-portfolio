import { getAllPosts } from "../../lib/posts";

export default function BlogPage({ title, content, author, tags, date }) {
  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <p>{author}</p>
      <p>{tags}</p>
      <p>{date}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const data = getAllPosts().find((item) => item.slug === context.params.slug);
  return {
    props: data, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false, // See the "fallback" section below
  };
}
