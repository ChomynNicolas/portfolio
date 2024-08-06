"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import { InfoProyectos } from "./components/InfoProyectos";
import { Carousel } from "../carousel/Carousel";

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
    <div className="py-4 pt-10 flex flex-wrap lg:flex-nowrap">
      <div className="w-full lg:max-w-lg lg:mb-0 lg:mr-4 md:justify-center md:pb-5 md:mb-6 flex-shrink-0 flex flex-col">
        <Carousel>
          {images.map((img, i) => (
            <Image key={i} src={img} width={700} height={400} alt={`imagen ${i}`} />
          ))}
        </Carousel>
      </div>
      <InfoProyectos
        content={content}
        title={title}
        link={link}
        tecnologias={tecnologias}
      />
    </div>
  );
};
