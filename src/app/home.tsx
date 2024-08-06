"use client";
import { AnimatedElement } from "@/components/AnimatedElement/AnimatedElement";
import { Proyectos } from "@/components/Proyectos/Proyectos";

import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiMongodb,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import * as handlers from "@/helpers/handlers";
import { MiInfo } from "@/components/MiInfo/MiInfo";

import left from "../../public/izquierda.png";
import right from "../../public/derecha.png";
import up from "../../public/arriba.png";
import down from "../../public/abajo.png";

import profile from "../../public/profile2.jpg";
import Image from "next/image";

const myAnimatedIcons = [
  {
    ubication: "top-0 md:top-2",
    icono: up,
    label: "Más Sobre mi",
    modalAnimation: "modal-animation-up",
    modalAnimationExit: "modal-animation-down-exit",
    elemento: <MiInfo />,
    handler: handlers.handlerUp,
  },
  {
    ubication: "bottom-2",
    icono: down,
    label: "Más Sobre mi",
    modalAnimation: "modal-animation-down",
    modalAnimationExit: "modal-animation-up-exit",

    elemento: <MiInfo />,
    handler: handlers.handlerDown,
  },
  {
    ubication: "right-0 md:right-2",
    icono: left,
    label: "Proyectos",
    modalAnimation: "modal-animation-left",
    modalAnimationExit: "modal-animation-rigth-exit",

    elemento: <Proyectos />,
    handler: handlers.handlerRight,
  },
  {
    ubication: "left-0 md:left-2",
    icono: right,
    label: "Proyectos",
    modalAnimation: "modal-animation-rigth",
    modalAnimationExit: "modal-animation-left-exit",

    elemento: <Proyectos />,
    handler: handlers.handlerLeft,
  },
];

export default function Home() {
  return (
    <div className="App ">
      {myAnimatedIcons.map((AnimatedIcons) => (
        <AnimatedElement
          key={AnimatedIcons.label}
          ubication={AnimatedIcons.ubication}
          icono={AnimatedIcons.icono}
          label={AnimatedIcons.label}
          modalAnimation={AnimatedIcons.modalAnimation}
          modalAnimationExit={AnimatedIcons.modalAnimationExit}
          elemento={AnimatedIcons.elemento}
          handler={AnimatedIcons.handler}
        />
      ))}

      <section className="overflow-y-auto max-h-screen ">
        <div className="mb-24 mt-20 ">
          <div className="mx-auto md:px-24 max-w-6xl  text-gray-500">
            <div className="">
              <div className=" z-10 grid gap-3 grid-cols-9">
                <div className="col-span-full  lg:col-span-9 overflow-hidden flex flex-col items-center justify-center gap-2  p-8 rounded-xl ">
                  <div className="flex flex-col items-center p-3 w-96 bg-transparent rounded-md shadow-2xl ">
                    <div className="flex">
                      <section className="flex justify-center items-center w-24 h-24 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
                        <Image
                          src={profile}
                          width={400}
                          height={400}
                          className="rounded-full"
                          alt="mi perfil"
                        />
                      </section>

                      <section className="block   m-3">
                        <div className="pl-3">
                          <h3 className="text-white font-bold text-3xl mb-2">
                            Nicolás Chomyn
                          </h3>
                          <h3 className="bg-clip-text text-blue-300  text-lg font-bold">
                            Full Stack Developer
                          </h3>
                        </div>
                      </section>
                    </div>

                    <div className="flex w-max gap-1 pt-2 mt-4">
                      <a
                        href="https://github.com/ChomynNicolas"
                        target="_blank"
                      >
                        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                          <FaGithub size={25} />
                          Github
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nicolás-chomyn"
                        target="_blank"
                      >
                        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1 rounded-full border border-blue-600 hover:scale-105 duration-200 hover:text-white hover:border-blue-800 hover:from-blue-600 hover:to-blue-800">
                          <FaLinkedin size={25} />
                          LinkedIn
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 items-center w-60 px-5 sm:w-96  md:w-full  md:px-5 pb-5  bg-white opacity-70 rounded-3xl shadow-lg round">
                    <h3 className="text-2xl text-black font-bold text-center mb-2">
                      Sobre mi
                    </h3>
                    <p className="text-xs sm:text-sm md:text-lg text-black justify-start ">
                      Soy estudiante de Ingeniería en Informática y
                      desarrollador web Full Stack especializado en el stack
                      MERN. Me apasiona crear aplicaciones web eficientes y
                      fáciles de usar, tengo habilidades en resolución de
                      problemas, trabajo en equipo y aprendizaje continuo.
                      <br />
                      Mis intereses incluyen el desarrollo de soluciones
                      tecnológicas que tengan un impacto significativo, el
                      avance tecnológico y el deporte.
                    </p>
                  </div>
                  <div className="flex-1 items-center px-5 py-5  bg-transparent rounded-3xl shadow-lg">
                    <h3 className="text-2xl text-white font-bold text-center mb-6">
                      Tecnologias
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2 md:gap-5">
                        <SiJavascript size={50} color="yellow" />
                        <SiTypescript size={50} color="blue" />
                        <FaReact size={50} color="blue" />
                        <FaHtml5 size={50} color="#e34c26" />
                        <FaCss3Alt size={50} color="blue" />
                        <RiTailwindCssFill size={50} color="cyan" />
                      </div>
                      <div className="flex gap-2 md:gap-5">
                        <FaNodeJs size={50} color="green" />
                        <SiMongodb size={50} color="green" />
                        <GrMysql size={50} color="#49a4f5" />
                        <SiSocketdotio size={50} color="white" />
                        <RiNextjsFill
                          size={50}
                          color="black"
                          className="bg-white rounded-full"
                        />
                        <FaGitAlt size={50} color="#ff5e37" />
                      </div>
                      <div className="flex"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
