import { Metadata } from 'next'
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
}


async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Sorry, we have problem with response');
  }

  return response.json();
}

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h2>BlogPage</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
        ))}
      </ul>
    </>
  )
}

export default Blog