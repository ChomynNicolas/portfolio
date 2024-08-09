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
    <div className="grid lg:grid-cols-12 md:gap-4">
      <div className=" lg:col-span-5 xl:col-span-4 flex items-center p-2 lg:p-5 sm:pt-10 lg:pt-0 ">
        <Carousel>
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              width={700}
              height={400}
              alt={`imagen ${i}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          ))}
        </Carousel>
      </div>
      <div className="lg:col-span-7 xl:col-span-8">
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
