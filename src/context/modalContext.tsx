import { SetStateAction, createContext, useState } from "react";
import { TNote } from "../types";

type TModalEnum = "create" | "view";

type TModal = {
  isModalOpen: boolean;
  modal: TModalEnum;
  changeModal: ({ str }: { str: TModalEnum }) => void;
  toggleModal: () => void;
  selectedNote: TNote | null;
  setSelectedNote: React.Dispatch<SetStateAction<TNote | null>>;
};

const ModalContext = createContext<TModal | null>(null);

const ModalContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<TModalEnum>("create");
  const changeModal = ({ str }: { str: TModalEnum }) => {
    setModal(str);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [selectedNote, setSelectedNote] = useState<TNote | null>(null);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modal,
        changeModal,
        toggleModal,
        selectedNote,
        setSelectedNote,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
