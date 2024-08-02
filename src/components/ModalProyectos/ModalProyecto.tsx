"use client";
import React, { useState, useEffect } from "react";
import "./ModalProyecto.css";
import { MdCancel } from "react-icons/md";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  modalAnimation: string;
  modalAnimationExit: string;
  elemento: React.ReactNode;
}

export const ModalProyecto = ({
  showModal,
  setShowModal,
  modalAnimation,
  elemento,
  modalAnimationExit,
}: Props) => {
  const [isVisible, setIsVisible] = useState(showModal);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
      setIsExiting(false);
    } else if (isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <>
      {isVisible ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-out duration-300"
            aria-hidden="true"
          ></div>
          <div className=" fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 overflow-hidden">
              <div
                className={` transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ease-out duration-300 ${
                  isExiting ? modalAnimationExit : modalAnimation
                } static`}
              >
                <button
                    onClick={()=> setShowModal(false)}
                    className="text-white hover:text-red-200 focus:outline-none absolute top-0 right-0"
                  >
                    <MdCancel size={50}/>
                  </button>
                <div className="bg-gray-700 flex overflow-hidden  ">
                
                  {elemento}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
