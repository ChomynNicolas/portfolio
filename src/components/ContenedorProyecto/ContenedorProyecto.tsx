"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import { InfoProyectos } from "./components/InfoProyectos";
import { Carousel } from "../carousel/Carousel";
import { NewContenedorProyecto } from "./components/NewContenedorProyecto";

interface Link {
  title: string;
  link: string;
}

interface Tecnologias {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Props {
  images: StaticImageData[];
  title: string;
  content: string;
  link: Array<Link>;
  tecnologias: Array<Tecnologias>;
}

export const ContenedorProyecto = ({
  content,
  images,
  link,
  title,
  tecnologias,
}: Props) => {
  return (
    <div className="flex ">
      
      <div className="flex-auto">
        <InfoProyectos
          content={content}
          title={title}
          link={link}
          tecnologias={tecnologias}
        />
      </div>
    </div>
  );
};
