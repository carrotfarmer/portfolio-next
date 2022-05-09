import Link from "next/link";
import React from "react";
import Image from "next/image";

import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";

import { IPost } from "../../types/Post";

interface PostProps {
  post: IPost;
  borderColor: string;
}

export const Post: React.FC<PostProps> = ({ post, borderColor }) => {
  return (
    <Link href={`https://blog.dhruva.is-a.dev/${post.slug}`} passHref>
      <a
        className="h-[23rem] w-[21rem] cursor-pointer rounded-md p-1 text-white duration-100 hover:scale-105 md:h-[25rem] md:w-[23rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`flex h-full w-full flex-col items-center rounded-xl bg-primary text-center font-medium ${borderColor}`}
        >
          <Image src={post.coverImage} width="400" height="200" alt="Post cover image" />
          <div className="p-2">
            <p className="pt-5 text-xl font-semibold">{post.title}</p>
            <p className="pt-2">{post.brief.slice(0, 150) + "..."}</p>
            <p className="flex flex-row pt-4">
              <p className="flex flex-row text-white">
                <BiLike className="text-white" size={20} />
                <p className="pl-2">{post.totalReactions}</p>
              </p>
              <p className="flex flex-row pl-4 text-white">
                <AiOutlineComment className="text-white" size={20} />
                <p className="pl-2">{post.responseCount}</p>
              </p>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
