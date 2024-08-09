import React from "react";
import { ContenedorProyecto } from "../ContenedorProyecto/ContenedorProyecto";

import imagen1 from "../../../public/mapmanager1.png";
import imagen2 from "../../../public/mapmanager2.png";
import imagen3 from "../../../public/mapmanager3.png";
import imagen4 from "../../../public/mapmanager4.png";

import imagen5 from "../../../public/pictureGame.png";
import imagen6 from "../../../public/pictureGame2.png";
import imagen7 from "../../../public/pictureGame3.png";

import {
  SiCanvas,
  SiCssmodules,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiSocketdotio,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const myProyects = [
  {
    images: [imagen1, imagen2, imagen3, imagen4],
    title: "Map Manager",
    content:
      "MapManager es una aplicación que permite a los usuarios crear y seguir eventos en un mapa y calendario. La base de datos fue desarrollada con MongoDB y Mongoose, mientras que la funcionalidad de ubicación se implementó con Leaflet, permitiendo guardar la ubicación junto con los datos del formulario. La interfaz de usuario, creada con React.js y CSS Modules, ofrece una experiencia intuitiva y visualmente atractiva.",
    link: [
      {
        title: "Pagina web",
        link: "https://master.durqva7i188r1.amplifyapp.com/",
      },
      {
        title: "Repositorio del FrontEnd",
        link: "https://github.com/AlejandroDojo/MapManager",
      },
      {
        title: "Repositorio del BackEnd",
        link: "https://github.com/AlejandroDojo/MapManager-Backend",
      },
    ],
    tecnologias: [
      {
        title: "Base de datos:",
        desc: "Mongodb",
        icon: <SiMongodb color="green" size={45} />,
      },
      {
        title: "ODM:",
        desc: "Mongoose",
        icon: <SiMongoose color="#bd0003" size={35} />,
      },
      {
        title: "Geolocalización y mapas:",
        desc: "Leaflet",
        icon: <SiLeaflet color="green" size={35} />,
      },
      {
        title: "Frontend:",
        desc: "React.js",
        icon: <FaReact color="#58b5ff" size={35} />,
      },
      {
        title: "Estilos:",
        desc: "CSS Modules",
        icon: <SiCssmodules size={35} />,
      },
    ],
  },
  {
    images: [imagen5, imagen6, imagen7],
    title: "PictureGame",
    content:
      "PictureGame es un juego de dibujo multijugador que permite a los usuarios dibujar y adivinar en tiempo real mientras interactúan a través de un chat en vivo. La integración de Socket.io con el elemento canvas en React.js permite compartir los dibujos instantáneamente entre los jugadores. Un chat en tiempo real, también implementado con Socket.io, permite a los usuarios escribir y enviar respuestas para resolver el juego.",
    link: [
      {
        title: "Pagina web",
        link: "https://socket-game-xi.vercel.app/",
      },
      {
        title: "Repositorio",
        link: "https://github.com/ChomynNicolas/multiplayerGame",
      },
    ],

    tecnologias: [
      {
        title: "WebSockets:",
        desc: "Socket.io",
        icon: <SiSocketdotio color="black" size={35} />,
      },
      {
        title: "Canvas:",
        desc: "Integración con React.js",
        icon: <SiCanvas color="red" size={35} />,
      },
      {
        title: "Frontend:",
        desc: "React.js",
        icon: <FaReact color="#58b5ff" size={35} />,
      },
    ],
  },
];

export const Proyectos = () => (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container mt-8 md:mt-0 py-10 mx-auto">
      <div className="-my-8 divide-y-2 flex flex-col ">
        {myProyects.map((proyecto) => (
          <ContenedorProyecto key={proyecto.title} {...proyecto} />
        ))}
      </div>
    </div>
  </section>
);
