import type { NextComponentType } from "next";

import { PROJECTS } from "../lib/constants";
import { ProjectType } from "../lib/types";

import { Project } from "../components/Project";

export const Projects: NextComponentType = () => {
  return (
    <div className="my-16 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {PROJECTS.map((project: ProjectType) => (
          <Project
            repoName={project.repoName}
            displayName={project.displayName}
            repoOwner={project.repoOwner}
            website={project.website}
            description={project.description}
            key={project.repoName}
          />
        ))}
      </div>
    </div>
  );
};
