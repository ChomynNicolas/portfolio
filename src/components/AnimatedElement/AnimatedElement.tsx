import { useEffect, useState } from "react";
import { ModalProyecto } from "../ModalProyectos/ModalProyecto";
import "./AnimatedElement.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  ubication: string;
  icono: StaticImageData;
  label: string;
  modalAnimation: string;
  modalAnimationExit: string;
  elemento: React.ReactNode;
  animation: boolean;
  animateOutDone:boolean;
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
  animation,
  animateOutDone
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handler(setShowModal, e);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handler]);

  return (
    <div>
      <div className={`element ${ubication} flex flex-col hover:text-gray-100    `}>
        <div
          onClick={() => setShowModal((prev) => !prev)}
          className="iconoAnimado cursor-pointer"
        >
          <Image src={icono}  alt="mi icono" className="w-8 h-8 sm:w-12 sm:h-12"/>
        </div>
        <p className="text-gray-50 text-xs md:text-lg ">{label}</p>
      </div>
      {animateOutDone && (
        <ModalProyecto
          showModal={showModal}
          setShowModal={setShowModal}
          modalAnimation={modalAnimation}
          elemento={elemento}
          modalAnimationExit={modalAnimationExit}
          animation={animation}
        />
      )}
    </div>
  );
};
