import React from "react";
import { SiReact } from "react-icons/si";

export const MiInfo = () => {
  return (
    <div className="rounded-md container md:max-w-[800px] p-5 ">
      <div className="flex  items-center justify-center gap-2 mb-2">
        <figure className="w-12 h-12 p-2 bg-blue-800 rounded-md">
          <SiReact size={34} />
        </figure>
        <h4 className="py-2 text-white text-center font-bold text-2xl md:text-5xl">
          Jorge Nicolás Chomyn Smuz
        </h4>
      </div>
      <p className="text-base md:text-xl leading-7 text-center text-white font-semibold space-y-4">
        Desarrollador Web Full Stack
      </p>
      <p className="md:text-lg leading-7 text-slate-300 space-y-4 pb-5">
        Estudiante de Ingeniería en Informática y desarrollador web Full Stack
        MERN, especializado en crear aplicaciones web eficientes y fáciles de
        usar. Tengo experiencia en JavaScript, React, Bootstrap, Tailwind CSS,
        Node.js, Express, MongoDB, Firebase y Git. Con manejo en resolución de
        problemas, trabajo en equipo y aprendizaje continuo. Actualmente, busco
        oportunidades para aplicar mis conocimientos en un entorno dinámico,
        donde pueda contribuir significativamente al desarrollo y mejora de
        productos tecnológicos.
      </p>

      <hr />
      <div className="py-5 leading-7">
        <h3 className="text-center text-xl md:text-3xl font-semibold mb-4">
          Conocimientos
        </h3>
        <p className="text-start md:text-lg text-slate-300">
          <span className="text-blue-800 font-bold text-xl">Frontend:</span>{" "}
          JavaScript, TypeScript, HTML5, CSS3, React.js, Next.js, TailwindCSS,
          AJAX
          <br />
          <span className="text-gray-200 font-bold text-xl">Backend:</span>{" "}
          Node.js, Express.js, MongoDB, MySQL, PostgreSQL, socket.io, RESTful
          APIs.
          <br />
          <span className="text-orange-400 font-bold text-xl">
            Herramientas:
          </span>{" "}
          Git, Visual Studio Code, Postman, Docker, JSON, Métodos Ágiles.
        </p>
        <p className="text-start md:text-lg text-slate-300">
          <span className="text-black font-bold text-xl">Idiomas:</span>
          <br />
          • Español: Nativo
          <br />• Inglés: A2
        </p>
      </div>
    </div>
  );
};
