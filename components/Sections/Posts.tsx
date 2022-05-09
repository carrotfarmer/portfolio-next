import React, { useEffect, useState } from "react";

import { fetchPosts } from "../../lib/fetchPosts";

import { IPost } from "../../types/Post";

import { Post } from "../Misc/Post";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = ({}) => {
  const [posts, setPosts] = useState<IPost[] | null>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const posts = await fetchPosts();

        setPosts(posts);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-16 px-3 font-sen" id="posts">
      <p className="text-3xl font-bold text-white">Recent Posts</p>
      <div className="grid grid-cols-1 gap-7 pt-5 md:grid-cols-2">
        {posts?.slice(0, 2).map((post: IPost) => (
          <Post post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
};
