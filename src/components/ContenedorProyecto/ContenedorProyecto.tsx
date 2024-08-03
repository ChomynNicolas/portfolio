import Image, { StaticImageData } from "next/image";
import React from "react";

import { InfoProyectos } from "./components/InfoProyectos";

interface Link {
  title: string;
  link: string;
}

interface Tecnologias{
  title:string;
  icon:React.ReactNode
}

interface Props {
  imagen: StaticImageData;
  title: string;
  content: string;
  link: Array<Link>;
  tecnologias:Array<Tecnologias>;
}

export const ContenedorProyecto = ({ content, imagen, link, title,tecnologias }: Props) => {
  return (
    <div className="py-10   flex flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-96 lg:h-96 lg:mb-0 lg:mr-4 md:justify-center md:pb-5 md:mb-6 flex-shrink-0 flex flex-col">
        <Image
          src={imagen}
          
          objectFit="contain"
          alt={title}
          className="rounded-md"
        />
      </div>
      <InfoProyectos content={content} title={title} link={link} tecnologias={tecnologias} />
    </div>
  );
};
