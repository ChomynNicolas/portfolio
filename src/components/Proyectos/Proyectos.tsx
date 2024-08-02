import React from "react";
import { ContenedorProyecto } from "../ContenedorProyecto/ContenedorProyecto";

import imagen1 from '../../../public/mi-pagina.jpg'
import imagen2 from '../../../public/pagina-web.png'


const myProyects = [
  {
    imagen: imagen1,
    title: 'Map Manager',
    content: 'MapManager es una aplicación que permite a los usuarios crear y seguir eventos con ubicaciones en un mapa y un calendario. Utilizando MongoDB y Mongoose, se desarrolló una base de datos robusta para almacenar la información de los eventos. La funcionalidad de ubicación del usuario se implementó con Leaflet, permitiendo guardar la ubicación junto con los datos del formulario en la base de datos. La interfaz de usuario fue creada con React.js y CSS Modules, asegurando una experiencia intuitiva y visualmente atractiva para los usuarios. Esta combinación de tecnologías permite a los usuarios gestionar y visualizar eventos de manera eficiente y dinámica.',
    link: 'https://github.com/AlejandroDojo/MapManager'

  },
  {
    imagen: imagen2,
    title: 'PictureGame',
    content: 'PictureGame es un juego de dibujo multijugador que permite a los usuarios dibujar y adivinar en tiempo real mientras interactúan a través de un chat en vivo. La integración de Socket.io con el elemento canvas en React.js permite compartir los dibujos instantáneamente entre los jugadores. Un chat en tiempo real, también implementado con Socket.io, permite a los usuarios escribir y enviar respuestas para resolver el juego. Además, el juego incluye un algoritmo diseñado para capturar y procesar las respuestas de los usuarios directamente desde el chat.',
    link: 'https://socket-game-xi.vercel.app/'

  }
]


export const Proyectos = () => (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">
        {
          myProyects.map(proyecto => (
            <ContenedorProyecto {...proyecto} />
          ))
        }
        
      </div>
    </div>
  </section>
);
