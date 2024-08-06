export const handlerLeft = (setShowModal: Function, e: KeyboardEvent) => {
  if (e.key === "ArrowLeft") {
    setShowModal((previus: boolean) => !previus);
  } else setShowModal(false);
};

export const handlerRight = (setShowModal: Function, e: KeyboardEvent) => {
  if (e.key === "ArrowRight") {
    setShowModal((previus: boolean) => !previus);
  } else setShowModal(false);
};

export const handlerDown = (setShowModal: Function, e: KeyboardEvent) => {
  if (e.key === "ArrowDown") {
    setShowModal((previus: boolean) => !previus);
  } else setShowModal(false);
};

export const handlerUp = (setShowModal: Function, e: KeyboardEvent) => {
  if (e.key === "ArrowUp") {
    setShowModal((previus: boolean) => !previus);
  } else setShowModal(false);
};
