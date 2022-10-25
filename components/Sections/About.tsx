import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { VscGithubAlt } from "react-icons/vsc";

const About: NextComponentType = () => {
  return (
    <div className="font-sen flex flex-row items-center justify-between px-3 md:my-8">
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
          Developer, Blogger, Student, Software Enthusiast
        </p>

        <p className="mt-4 pb-5 text-gray-400">
          I like to build web applications, write blog posts on tech and <br />{" "}
          explore programming. Apart from coding, I like to read, draw and play
          sports.
        </p>

        <motion.div
          whileHover={{
            scale: 1.025,
          }}
        >
          <Link href="https://blog.dhruva.is-a.dev" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <button className="flex flex-row rounded-lg bg-yellow-300 px-5 py-2 hover:bg-yellow-400">
                Blog <HiOutlineArrowNarrowRight className="pl-1" size={24} />
              </button>
            </a>
          </Link>
        </motion.div>
      </div>

      <div className="custom:block hidden">
        <Image
          src={require("../../public/assets/avatar.png")}
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
