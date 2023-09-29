import { List } from '@amatelas/server'
import { PostListItem } from '@src/components/post-list-item/PostListItem.tsx'
import { useEffect, useState } from 'react'

type Post = {
  id: string
  userId: string
  title: string
  body: string
}

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json: Post[]) => setPosts(json))
  })

  return (
    <>
      <List>
        {posts.map((post) => (
          <PostListItem
            posted="June 22nd, 2023"
            description={`${post.body.substring(0, 100)}...`}
            title={post.title}
            index={['head1', 'head2']}
          />
        ))}
      </List>
    </>
  )
}
