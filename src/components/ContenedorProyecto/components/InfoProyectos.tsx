import Link from "next/link";
import React from "react";
import { FaHandPointLeft } from "react-icons/fa";

interface Tecnologias {
  title: string;
  desc:string;
  icon: React.ReactNode;
}

interface Link {
  title: string;
  link: string;
}

interface Props {
  title: string;
  content: string;
  link: Array<Link>;
  tecnologias: Array<Tecnologias>;
}

export const InfoProyectos = ({ content, link, title, tecnologias }: Props) => {
  return (
    <div className="  md:flex-grow ">
      <h2 className="text-2xl lg:text-5xl font-medium text-center text-gray-50 title-font  md:mb-5">
        {title}
      </h2>
      <p className="leading-relaxed text-gray-100 text-sm md:text-base lg:text-lg ">
        {content}
      </p>

      <h2 className="text-xl lg:text-2xl font-medium text-center text-gray-50 title-font  md:my-2">
        Tecnologias usadas
      </h2>
      <div className="leading-relaxed text-gray-100 text-sm md:text-base lg:text-lg  mx-auto flex flex-wrap  items-center lg:justify-center">
        {tecnologias.map((tec) => (
          <div 
          key={tec.title}
          className="flex items-center gap-2 pb-2 pr-2">
            {tec.icon}
            <p>{tec.title} {tec.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap text-sm md:text-lg gap-1 md:gap-5 items-center sm:justify-around  ">
        {link.map((link) => (
          <a
            key={link.title}
            href={link.link}
            target="_blank"
            className="text-blue-400 inline-flex items-center mt-4"
          >
            Ir a {link.title}
            <FaHandPointLeft size={30} className="pl-2" />
          </a>
        ))}
      </div>
    </div>
  );
};
