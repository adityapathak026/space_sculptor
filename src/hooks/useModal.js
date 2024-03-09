import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return { openModal, setOpenModal, handleOpen, handleClose };
};

export default useModal;
