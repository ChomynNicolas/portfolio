import React from "react";
import { ContenedorProyecto } from "../ContenedorProyecto/ContenedorProyecto";

import imagen1 from "../../../public/mi-pagina.jpg";
import imagen2 from "../../../public/pagina-web.png";
import { SiCanvas, SiCssmodules, SiLeaflet, SiMongodb, SiMongoose, SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";


const myProyects = [
  {
    imagen: imagen1,
    title: "Map Manager",
    content:
      "MapManager es una aplicación que permite a los usuarios crear y seguir eventos con ubicaciones en un mapa y un calendario. Utilizando MongoDB y Mongoose, se desarrolló la base de datos. La funcionalidad de ubicación del usuario se implementó con Leaflet, permitiendo guardar la ubicación junto con los datos del formulario en la base de datos. La interfaz de usuario fue creada con React.js y CSS Modules, asegurando una experiencia intuitiva y visualmente atractiva para los usuarios.",
    link: [
      {
        title: 'Repositorio del FrontEnd',
        link: "https://github.com/AlejandroDojo/MapManager",
      },
      {
        title: 'Repositorio del BackEnd',
        link: "https://github.com/AlejandroDojo/MapManager-Backend",
      }
    ],
    tecnologias: [
      {
        title: "Base de datos: MongoDB",
        icon: <SiMongodb  size={45} />,
      },
      {
        title: "ODM: Mongoose",
        icon: <SiMongoose size={35} />,
      },
      {
        title: "Geolocalización y mapas: Leaflet",
        icon: <SiLeaflet  size={35} />,
      },
      {
        title: "Frontend: React.js",
        icon: <FaReact   size={35} />,
      },
      {
        title: "Estilos: CSS Modules",
        icon: <SiCssmodules    size={35} />,
      },
    ],
  },
  {
    imagen: imagen2,
    title: "PictureGame",
    content:
      "PictureGame es un juego de dibujo multijugador que permite a los usuarios dibujar y adivinar en tiempo real mientras interactúan a través de un chat en vivo. La integración de Socket.io con el elemento canvas en React.js permite compartir los dibujos instantáneamente entre los jugadores. Un chat en tiempo real, también implementado con Socket.io, permite a los usuarios escribir y enviar respuestas para resolver el juego.",
      link: [
        {
          title: 'Pagina web',
          link: "https://socket-game-xi.vercel.app/",
        },
        {
          title: 'Repositorio',
          link: "https://github.com/ChomynNicolas/multiplayerGame",
        }
        
      ],
    
    tecnologias: [
      {
        title: "WebSockets: Socket.io",
        icon: <SiSocketdotio size={35} />,
      },
      {
        title: "Canvas: Integración con React.js",
        icon: <SiCanvas  size={35} />,
      },
      {
        title: "Frontend: React.js",
        icon: <FaReact   size={35} />,
      },
    ],
  },
];

export const Proyectos = () => (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-10 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">
        {myProyects.map((proyecto) => (
          <ContenedorProyecto key={proyecto.title} {...proyecto} />
        ))}
      </div>
    </div>
  </section>
);
