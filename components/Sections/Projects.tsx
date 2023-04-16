import type { NextComponentType } from "next";

import { GRADIENTS, PROJECTS } from "../../lib/constants";
import { IProject } from "../../types/Project";

import { Project } from "../Misc/Project";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 items-center justify-center grid grid-cols-5 gap-4">
        {PROJECTS.map((project: IProject) => (
          <Project
            project={project}
            gradient={GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
