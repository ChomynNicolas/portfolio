import { Carousel } from "@/components/carousel/Carousel";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Tecnologias {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Link {
  title: string;
  link: string;
}

interface Props {
  images: StaticImageData[];
  title: string;
  content: string;
  link: Array<Link>;
  tecnologias: Array<Tecnologias>;
}

export const NewContenedorProyecto = ({
  content,
  link,
  title,
  tecnologias,
  images,
}: Props) => {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
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
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {content}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
