import React from "react";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Blogs({ allPosts }) {
  return (
    <div>
      <p>Blogs page test</p>
      {allPosts.map((e) => (
        <div key={e.slug}>
          <Link href={`/blog/${e.slug}`}>{e.title}</Link>
          <p>{e.content}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const allPosts = getAllPosts();
  return {
    props: { allPosts }, // will be passed to the page component as props
  };
}
