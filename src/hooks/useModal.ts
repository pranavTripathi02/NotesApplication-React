import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

const useModal = () => {
  const currentContext = useContext(ModalContext);
  if (!currentContext) {
    throw new Error("Error no context");
  }
  return currentContext;
};

export default useModal;
