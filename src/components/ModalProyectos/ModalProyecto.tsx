"use client";
import React, { useState, useEffect, useRef } from "react";
import "./ModalProyecto.css";
import { MdCancel } from "react-icons/md";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  modalAnimation: string;
  modalAnimationExit: string;
  elemento: React.ReactNode;
  animation: boolean;
}

export const ModalProyecto = ({
  showModal,
  setShowModal,
  modalAnimation,
  elemento,
  modalAnimationExit,
  animation
}: Props) => {
  const [isVisible, setIsVisible] = useState(showModal);
  const [isExiting, setIsExiting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal && animation) {
      setIsVisible(true);
      setIsExiting(false);
    } else if (isVisible &&animation) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [showModal,isVisible,isExiting,animation]);


  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      {isVisible ? (
        <div
          className="fixed z-50  "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          
        >
          <div
            className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity ease-out duration-300 "
            aria-hidden="true"
          ></div>
          <div className=" fixed inset-0  z-10 overflow-y-auto max-h-screen max-w-screen">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 overflow-hidden">
              <div
                ref={modalRef}
                className={` transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all ease-out duration-300 ${
                  isExiting ? modalAnimationExit : modalAnimation
                } static`}
              >
                <button
                    onClick={()=> setShowModal(false)}
                    className="text-white hover:text-red-200  focus:outline-none absolute top-0 right-0"
                  >
                    <MdCancel size={50}/>
                  </button>
                <div className="bg-gradient-to-r from-cyan-600 via-sky-700 to-blue-800 flex overflow-y-auto  border-4   ">
                
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