import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact } from "../components";
import { Posts } from "../components/Sections/Posts";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Posts />
      <Contact />
    </div>
  );
};

export default Home;
