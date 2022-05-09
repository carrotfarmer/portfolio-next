import Link from "next/link";
import React from "react";
import Image from "next/image";

import { IPost } from "../../types/Post";

interface PostProps {
  post: IPost;
  gradient: string;
}

export const Post: React.FC<PostProps> = ({ post, gradient }) => {
  return (
    <Link href={`https://blog.dhruva.is-a.dev/${post.slug}`} passHref>
      <a
        style={{
          background: `linear-gradient(to right, ${gradient})`,
        }}
        className={`h-[23rem] w-[21rem] cursor-pointer rounded-lg p-1 text-white duration-100 hover:scale-105 md:h-[23rem] md:w-[23rem]`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex h-full w-full flex-col items-center rounded-lg bg-primary text-center font-medium">
          <Image src={post.coverImage} width="400" height="200" />
          <div className="p-1">
            <p className="pt-5 text-xl font-semibold">{post.title}</p>
            <p className="pt-2">{post.brief.slice(0, 150) + "..."}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
