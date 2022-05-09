import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGraphql,
  SiPrisma,
  SiNestjs,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>
      <div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-8">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://typescriptlang.org" target="_blank" rel="noopener noreferrer">
            <SiTypescript size={48} className="text-blue-500" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <SiReact size={48} className="text-blue-300" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
            <SiNodedotjs size={48} className="text-green-500" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://python.org" target="_blank" rel="noopener noreferrer">
            <SiPython size={48} className="text-yellow-300" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
            <SiGraphql size={48} className="text-pink-400" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://prisma.io" target="_blank" rel="noopener noreferrer">
            <SiPrisma size={48} className="text-green-400" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://nestjs.com" target="_blank" rel="noopener noreferrer">
            <SiNestjs size={48} className="text-red-400" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
            <SiExpress size={48} className="text-white" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
