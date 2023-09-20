import { Metadata } from 'next';
import React from 'react'

type BlogPageProps = {
  params: {
    id: string;
  }
}

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return response.json();
}

export  const generateMetadata = async ({params: {id}}: BlogPageProps): Promise<Metadata> => {
  const post = await getData(id);

  return {
    title: `Blog ${post.title}`
  }
}

const BlogPage = async ({params: {id}}: BlogPageProps) => {
  const post = await getData(id);
  
  return (
    <div>
      <h3>Single post Page</h3>
      <p>{post.title}</p>
      <p style={{color: 'gray'}}>{post.body}</p>
    </div>
  )
}

export default BlogPage