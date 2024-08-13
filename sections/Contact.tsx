import type { NextComponentType } from "next";

import { SiGithub, SiHashnode, SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import { Icon } from "../components/Icon";

export const Contact: NextComponentType = () => {
  return (
    <div className="divide divide-y divide-dotted text-white">
      <div></div>
      <div className="px-3 font-sen" id="contact">
        <div className="my-4 flex flex-row justify-center gap-x-4 pt-2">
          <Icon icon={<SiGithub size={30} />} url="https://github.com/carrotfarmer" />
          <Icon
            icon={<SiHashnode className="text-blue-600" size={30} />}
            url="https://hashnode.com/@carrotfarmer"
          />
          <Icon
            icon={<FiMail className="text-red-400" size={30} />}
            url="mailto:dhruvas17068@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
