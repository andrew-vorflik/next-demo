import Link from 'next/link';
import React, { FC } from 'react'

type TPostsProps = {
  posts: any[];
}

const Posts: FC<TPostsProps> = ({posts}) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul>
  )
}

export default Posts