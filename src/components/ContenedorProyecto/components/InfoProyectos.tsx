import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  content: string;
  link: string;
}

export const InfoProyectos = ({ content, link, title }: Props) => {
  const displayPath = link.split("/")[2];

  return (
    <div className="md:flex-grow">
      <h2 className="text-5xl font-medium text-center text-gray-50 title-font mb-5">
        {title}
      </h2>
      <p className="leading-relaxed text-gray-100">{content}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-400 inline-flex items-center mt-4"
      >
        Ir a {displayPath}
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};
