import Link from "next/link";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <>
      <div className=" flex flex-col  rounded-md container md:w-[800px] p-10 pt-10 overflow-hidden">
        <h3 className=" top-1 left-4 text-4xl font-bold text-gray-100">
          Contacta conmigo
        </h3>

        <div className="pt-5 flex flex-col gap-5">
          <a target="_blank" href="https://www.linkedin.com/in/nicolás-chomyn" className="flex items-end gap-5">
            <FaLinkedinIn size={40} color="blue" />
            <p className="text-xl text-white hover:text-blue-300">LinkedIn</p>
          </a>
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=chomynnicolas2@gmail.com" className="flex items-end gap-5">
            <SiGmail size={40} color="#b90002" />
            <p className="text-xl text-white hover:text-red-200">
              Correo Electrónico
            </p>
          </a>
          <a target="_blank" href="https://github.com/ChomynNicolas" className="flex items-end gap-5">
            <FaGithub size={40} color="black" />
            <p className="text-xl text-white hover:text-gray-600">Github</p>
          </a>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <a 
          href="/CV-NicolasChomyn.pdf"
          target="_blank"
          className="cursor-pointer group relative justify-center items-center flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ">
            <AiOutlineDownload size={30}/>
            CV
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              Descargar
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
