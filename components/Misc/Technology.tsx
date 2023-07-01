import { motion } from "framer-motion";
import React from "react";

interface TechnologyProps {
  icon: JSX.Element;
  color: string;
  href: string;
}

export const Technology: React.FC<TechnologyProps> = ({ icon, color, href }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={color}>{icon}</div>
      </a>
    </motion.div>
  );
};
