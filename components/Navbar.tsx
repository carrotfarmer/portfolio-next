import type { NextComponentType } from "next";
import Link from "next/link";

import { VscGithubAlt } from "react-icons/vsc";

import { NavLink } from "../components/NavLink";

export const Navbar: NextComponentType = () => {
  return (
    <header className={`py-8 font-jost sm:flex sm:flex-row sm:items-center sm:justify-between`}>
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <NavLink text="Home" url="#" />
        <NavLink text="Skills" url="#skills" />
        <NavLink text="Projects" url="#projects" />
      </p>

      <Link href="https://github.com/carrotfarmer/portfolio-next" passHref>
        <a
          className="float-right mr-2 hidden rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0 sm:flex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </header>
  );
};
