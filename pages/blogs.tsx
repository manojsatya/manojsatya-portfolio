import React from "react";
import Link from "next/link";
import { getAllPosts, IallPosts } from "../lib/posts";
import { GetStaticProps } from "next";

interface BlogsProps {
  allPosts: IallPosts[];
}

export default function Blogs({ allPosts }: BlogsProps) {
  return (
    <div>
      <p>Blogs page test</p>
      {allPosts.map((e) => (
        <div key={e.slug}>
          <Link href={`/blog/${e.slug}`}>{e.title}</Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts }, // will be passed to the page component as props
  };
};
