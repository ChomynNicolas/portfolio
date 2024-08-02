import Image, { StaticImageData } from "next/image";
import React from "react";

import { InfoProyectos } from "./components/InfoProyectos";

interface Props {
  imagen: StaticImageData;
  title: string;
  content: string;
  link: string;
}

export const ContenedorProyecto = ({ content, imagen, link, title }: Props) => {
  return (
    <div className="pt-10   flex flex-wrap md:flex-nowrap">
      <div className=" md:w-96 md:h-96 md:mb-0 md:mr-4 md:justify-center pb-5 mb-6 flex-shrink-0 flex flex-col">
        <Image
          src={imagen}
          width={600}
          height={600}
          objectFit="contain"
          alt={title}
          className="rounded-md"
        />
      </div>
      <InfoProyectos content={content} title={title} link={link} />
    </div>
  );
};
