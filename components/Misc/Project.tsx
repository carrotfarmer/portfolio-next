import Link from "next/link";
import React from "react";
import { IProject } from "../../types/Project";

interface ProjectProps {
  project: IProject;
  gradient: string;
}

export const Project: React.FC<ProjectProps> = ({ project, gradient }) => {
  return (
    <Link href={project.href} passHref>
      <a
        style={{
          background: `linear-gradient(to right, ${gradient})`,
        }}
        className={`cursor-pointer rounded-lg p-1 text-white duration-100 hover:scale-105`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
          <p className="text-xl font-semibold">{project.name}</p>
          <p>{project.desc}</p>
        </div>
      </a>
    </Link>
  );
};
