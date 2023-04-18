import Link from "next/link";
import React from "react";
import Image from "next/image";

import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";

import { IPost } from "../../types/Post";

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <div className="mb-5 max-w-sm rounded-lg border border-purple-200 bg-black shadow-md">
        <a href="#">
          <img className="rounded-t-lg" src={post.coverImage} alt="" />
        </a>
        <div className="p-5">
          <a href={`https://blog.dhruva.is-a.dev/${post.slug}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 hover:text-gray-400">{post.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-200">{post.brief.slice(0, 150)}...</p>
          <div className="flex flex-row gap-4">
            <a
              className="inline-flex items-center rounded-lg bg-purple-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-purple-500 focus:ring-4 focus:ring-blue-300"
              href={`https://blog.dhruva.is-a.dev/${post.slug}`}
            >
              Read more
            </a>
            <div className="flex flex-row gap-1 pt-2 text-lg text-white">
              <BiLike size={"21"} /> {post.totalReactions}
            </div>
            <div className="flex flex-row gap-1 pt-2 text-lg text-white">
              <AiOutlineComment size={"21"} /> {post.responseCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
