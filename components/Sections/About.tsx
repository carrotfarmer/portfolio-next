import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { VscGithubAlt } from "react-icons/vsc";

const About: NextComponentType = () => {
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
          Backend Developer, Blogger, Student, Tech Enthusiast
        </p>

        <p className="mt-4 text-gray-400">
          I like to build web applications, write blog posts on tech and <br /> explore programming.
        </p>

        <Link href="https://blog.dhruva.is-a.dev" passHref>
          <a
            className="text-md mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.png"
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
