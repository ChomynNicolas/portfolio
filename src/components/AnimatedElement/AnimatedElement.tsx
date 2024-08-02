"use client";
import { useEffect, useState } from "react";
import { ModalProyecto } from "../ModalProyectos/ModalProyecto";
import "./AnimatedElement.css";

interface Props {
  ubication: string;
  icono: React.ReactNode;
  label: string;
  modalAnimation: string;
  modalAnimationExit: string;
  elemento: React.ReactNode;
  handler: (setShowModal: Function, e: KeyboardEvent) => void;
}

export const AnimatedElement = ({
  ubication,
  icono,
  label,
  modalAnimation,
  modalAnimationExit,
  elemento,
  handler,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handler(setShowModal,e);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`element ${ubication} flex flex-col hover:text-gray-100  `}
    >
      <div
      onClick={()=> setShowModal(previus => !previus)}
      className="iconoAnimado cursor-pointer">{icono}</div>
      <p className="text-gray-50 ">{label}</p>
      <ModalProyecto
        showModal={showModal}
        setShowModal={setShowModal}
        modalAnimation={modalAnimation}
        elemento={elemento}
        modalAnimationExit={modalAnimationExit}
      />
    </div>
  );
};
