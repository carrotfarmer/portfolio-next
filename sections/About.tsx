import type { NextComponentType } from "next";

import Link from "next/link";

import { motion } from "framer-motion";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { VscGithubAlt } from "react-icons/vsc";

export const About: NextComponentType = () => {
  return (
    <div className="flex flex-row items-center justify-between px-3 font-sen md:my-8">
      <div>
        <p className="text-3xl font-bold text-white">
          Dhruva Srinivas
          <Link href="https://github.com/carrotfarmer/portfolio-next" passHref>
            <a
              className="float-right mr-2 rounded-lg bg-zinc-800 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none md:hidden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
            >
              <VscGithubAlt />
            </a>
          </Link>
        </p>
        <p className="mt-1 text-lg text-gray-300">
          high school student studying in the Bay Area
        </p>

        <p className="mt-4 pb-5 text-gray-400">
          I like building cool stuff with code, writing about tech, and trying
          out new programming ideas. When I&apos;m not coding, you’ll usually
          find me reading, drawing, or playing sports.
        </p>

        <motion.div
          whileHover={{
            scale: 1.025,
          }}
        >
          <Link href="https://thecatblog.hashnode.dev/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <button className="flex flex-row rounded-lg bg-yellow-300 px-5 py-2 hover:bg-yellow-400">
                Blog <HiOutlineArrowNarrowRight className="pl-1" size={24} />
              </button>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
