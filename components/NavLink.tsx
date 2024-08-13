import React from "react";

interface NavLinkProps {
  url: string;
  text: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      className="decoration-text-blue-200 cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:underline hover:decoration-blue-300 hover:underline-offset-4"
    >
      {text}
    </a>
  );
};
