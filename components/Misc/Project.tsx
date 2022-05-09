import Link from "next/link";
import React from "react";

interface ProjectProps {
  name: string;
  desc: string;
  href: string;
  gradient: string;
}

export const Project: React.FC<ProjectProps> = ({
  name,
  desc,
  href,
  gradient,
}) => {
  return (
    <Link href={href} passHref>
      <a
        style={{
          background: `linear-gradient(to right, ${gradient})`,
        }}
        className={`h-[7rem] w-[14rem] cursor-pointer rounded-lg p-1 text-white duration-100 hover:scale-105`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
          <p className="text-xl font-semibold">{name}</p>
          <p>{desc}</p>
        </div>
      </a>
    </Link>
  );
};
