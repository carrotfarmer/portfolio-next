import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGraphql,
  SiPrisma,
  SiNestjs,
  SiNextdotjs,
  SiTrpc,
  SiReactquery,
} from "react-icons/si";

import { Technology } from "../Misc/Technology";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>
      <div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-8">
        <Technology
          icon={<SiTypescript size={48} />}
          color="text-blue-500"
          href="https://typescriptlang.org"
        />

        <Technology icon={<SiReact size={48} />} color="text-blue-300" href="https://reactjs.org" />

        <Technology
          icon={<SiNodedotjs size={48} />}
          color="text-green-400"
          href="https://python.org"
        />

        <Technology
          icon={<SiPython size={48} />}
          color="text-yellow-300"
          href="https://python.org"
        />

        <Technology
          icon={<SiGraphql size={48} />}
          color="text-pink-400"
          href="https://graphql.org"
        />

        <Technology icon={<SiPrisma size={48} />} color="text-green-400" href="https://prisma.io" />

        <Technology icon={<SiNestjs size={48} />} color="text-red-400" href="https://nestjs.com" />

        <Technology icon={<SiNextdotjs size={48} />} color="text-white" href="https://nextjs.org" />

        <Technology icon={<SiTrpc size={48} />} color="text-blue-300" href="https://trpc.io" />

        <Technology
          icon={<SiReactquery size={48} />}
          color="text-red-400"
          href="https://tanstack.com/query/latest/"
        />
      </div>
    </div>
  );
};

export default Skills;
