'use client';
import { useState } from "react";
import { ModalProyecto } from "../ModalProyectos/ModalProyecto";
import "./AnimatedElement.css";

interface Props {
  ubication: string;
  icono: React.ReactNode;
  label: string;
  
}

export const AnimatedElement = ({ ubication, icono, label }: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div
      className={`element ${ubication} flex flex-col hover:text-gray-100 cursor-pointer`}
    >
      <div onClick={() => setShowModal(true)} className="iconoAnimado">{icono}</div>
      <p className="text-gray-600 hover:text-gray-900">{label}</p>
      <ModalProyecto showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
};
