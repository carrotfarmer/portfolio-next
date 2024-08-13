import Link from "next/link";
import React, { useEffect } from "react";
import { ProjectType } from "../lib/types";

interface Project {
  name: string;
  desc: string;
  language: string;
  stars: number;
}

export const Project: React.FC<ProjectType> = ({ repoName, website }) => {
  const [project, setProject] = React.useState<Project>(null);

  useEffect(() => {
    const fetchGithub = async () => {
      const res = await fetch(
        `https://api.github.com/repos/carrotfarmer/${repoName}`,
        {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        }
      );
      const data = await res.json();

      setProject({
        name: data.name,
        desc: data.description,
        language: data.language,
        stars: data.stargazers_count,
      });

      console.log(data);
    };

    fetchGithub();
  }, [repoName]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-sm w-full h-48 rounded-lg border border-gray-700 bg-gray-900 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <Link href={`https://github.com/carrotfarmer/${repoName}`} passHref>
        <a className="block h-full">
          <div className="px-6 py-3 h-full flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-1 border-b border-gray-700 pb-1">
                <span className="transition-colors duration-300 hover:text-blue-400">
                  {project.name}
                </span>
              </div>
              <p className="text-gray-400 text-base mb-2">
                {project.desc}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2">
                  {project.language}
                </span>
                <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-yellow-300 mr-2 mb-2">
                  ⭐ {project.stars}
                </span>
              </div>
              {website && (
                <Link href={website} passHref>
                  <a
                    className="text-blue-400 hover:text-blue-600 underline ml-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site
                  </a>
                </Link>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
