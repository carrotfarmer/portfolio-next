import type { NextPage } from "next";

import { Navbar } from "../components/Navbar";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";


const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
