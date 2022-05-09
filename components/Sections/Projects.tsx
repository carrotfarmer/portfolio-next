import type { NextComponentType } from "next";

import Link from "next/link";
import { GRADIENTS } from "../../lib/constants";

import { Project } from "../Misc/Project";

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Project
          name="Cubedeck"
          desc="Taking your cubing skills to the moon!"
          href="https://cubedeck.netlify.app"
          gradient={GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]}
          // gradient="from-[#D8B4FE] to-[#818CF8]"
        />

        <Project
          name="kitty.js"
          desc="A JavaScript wrapper for TheCatAPI"
          href="https://www.npmjs.com/package/@kittyjs/kitty-js"
          // gradient="from-pink-300 via-purple-300 to-indigo-400"
          gradient={GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]}
        />

        <Project
          name="cleansweep"
          desc="A CLI that organizes your downloads."
          href="https://github.com/carrotfarmer/cleansweep"
          gradient={GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]}
        />
      </div>
    </div>
  );
};

export default Projects;
