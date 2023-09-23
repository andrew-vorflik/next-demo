'use client';
import React, {useState} from 'react';
import useSWR from 'swr';

async function getPostsBySearch(search: string) {
  const response = await fetch(`api/posts?q=${search}`);

  if (!response.ok) {
    throw new Error('Sorry, we have problem with response');
  }

  return response.json();
}

const PostsSearch = () => {
  const {mutate} = useSWR('posts')
  const [search, setSearch] = useState("")

  const onSearch: React.ChangeEventHandler<HTMLInputElement>
  = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);
    mutate(posts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={search} onChange={onSearch} />
      <button type="submit">Search</button>
    </form>
  )
}

export default PostsSearch