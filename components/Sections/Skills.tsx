import {
	SiReact,
	SiTypescript,
	SiNodedotjs,
	SiPython,
	SiGraphql,
	SiNextdotjs,
	SiC,
	SiRust
} from "react-icons/si";

import { Technology } from "../Misc/Technology";

const Skills = () => {
	return (
		<div className="my-16 px-3 font-sen text-white" id="skills">
			<p className="text-3xl font-bold text-white">i can work with:</p>
			<div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-8">
				<Technology
					icon={<SiTypescript size={48} />}
					color="text-blue-500"
					href="https://typescriptlang.org"
				/>

				<Technology icon={<SiC size={48} />} color="text-blue-600" href="https://en.wikipedia.org/wiki/C_(programming_language)" />

				<Technology icon={<SiRust size={48} />} color="text-red-600" href="https://rust-lang.org" />

				<Technology
					icon={<SiPython size={48} />}
					color="text-yellow-300"
					href="https://python.org"
				/>

				<Technology icon={<SiReact size={48} />} color="text-blue-300" href="https://reactjs.org" />

				<Technology
					icon={<SiNodedotjs size={48} />}
					color="text-green-400"
					href="https://python.org"
				/>

				<Technology
					icon={<SiGraphql size={48} />}
					color="text-pink-400"
					href="https://graphql.org"
				/>

				<Technology icon={<SiNextdotjs size={48} />} color="text-white" href="https://nextjs.org" />
			</div>
		</div>
	);
};

export default Skills;
