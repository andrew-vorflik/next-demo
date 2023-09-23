'use client';
import Posts from '@/components/Posts/Posts';
import PostsSearch from '@/components/PostsSearch/PostsSearch';
import useSWR from 'swr';
import { Metadata } from 'next'
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
}

export const revalidate = 10;

async function getPosts() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Sorry, we have problem with response');
  }

  return response.json();
}

const Blog = () => {
  const {data: posts, isLoading} = useSWR('posts', getPosts)
  // const posts = await getData();

  return (
    <>
      <h2>BlogPage</h2>
      <PostsSearch />
      {isLoading ? <h3>Loading</h3> :
        <Posts posts={posts} />
      }
    </>
  )
}

export default Blog