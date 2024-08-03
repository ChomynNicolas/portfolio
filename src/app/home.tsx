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



const myAnimatedIcons = [
  {
    ubication: "top-0 md:top-2",
    icono: <FaArrowAltCircleUp size={60} className="bg-blue-600 rounded-2xl" />,
    label: "Más Sobre mi",
    modalAnimation: "modal-animation-up",
    modalAnimationExit: "modal-animation-down-exit",
    elemento: <MiInfo />,
    handler: handlers.handlerUp,
  },
  {
    ubication: "bottom-2",
    icono: (
      <FaArrowAltCircleDown size={60} className="bg-blue-600 rounded-2xl" />
    ),
    label: "Más Sobre mi",
    modalAnimation: "modal-animation-down",
    modalAnimationExit: "modal-animation-up-exit",

    elemento: <MiInfo />,
    handler: handlers.handlerDown,
  },
  {
    ubication: "right-0 md:right-2",
    icono: (
      <FaArrowAltCircleRight size={60} className="bg-blue-600 rounded-2xl" />
    ),
    label: "Proyectos",
    modalAnimation: "modal-animation-left",
    modalAnimationExit: "modal-animation-rigth-exit",

    elemento: <Proyectos />,
    handler: handlers.handlerRight,
  },
  {
    ubication: "left-0 md:left-2",
    icono: (
      <FaArrowAltCircleLeft size={60} className="bg-blue-600 rounded-2xl" />
    ),
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

      <section className="overflow-y-auto max-h-screen">
        <div className="mb-24 mt-20 ">
          <div className="mx-auto md:px-24 max-w-6xl  text-gray-500">
            <div className="">
              <div className=" z-10 grid gap-3 grid-cols-9">
                <div className="col-span-full  lg:col-span-9 overflow-hidden flex flex-col items-center justify-center gap-2  p-8 rounded-xl ">
                  <div className="flex flex-col items-center p-3 w-96 bg-transparent rounded-md shadow-2xl ">
                    <div className="flex">
                      <section className="flex justify-center items-center w-24 h-24 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
                        <svg viewBox="0 0 15 15" className="w-7 fill-gray-700">
                          <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"></path>
                        </svg>
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
                      href="https://www.linkedin.com/in/chomyn-nicol%C3%A1s-b10b99319/"
                      target="_blank"
                      >
                        <button className="flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1 rounded-full border border-blue-600 hover:scale-105 duration-200 hover:text-white hover:border-blue-800 hover:from-blue-600 hover:to-blue-800">
                          <FaLinkedin size={25} />
                          LinkedIn
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 items-center w-60 px-5 sm:w-96  md:w-full  md:px-5 pb-5  bg-white rounded-3xl shadow-lg round">
                    <h3 className="text-2xl text-black font-bold text-center mb-2">
                      Sobre mi
                    </h3>
                    <p className="text-xs sm:text-sm md:text-lg text-gray-600 justify-start ">
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
