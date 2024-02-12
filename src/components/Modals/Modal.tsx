import styled from "styled-components";
import useModal from "../../hooks/useModal";
import CreateNoteModal from "./createNoteModal";
import ViewNoteModal from "./viewNoteModal";

function Modal() {
  const { isModalOpen, modal: modalType, toggleModal } = useModal();
  if (!isModalOpen) {
    return null;
  }
  if (modalType !== "create" && modalType !== "view") {
    toggleModal;
    return null;
  }
  return (
    <ModalWrapper>
      <ModalBackground onClick={toggleModal}></ModalBackground>
      <ModalEl>
        {modalType === "create" ? (
          <CreateNoteModal toggleModal={toggleModal} />
        ) : (
          <ViewNoteModal toggleModal={toggleModal} />
        )}
      </ModalEl>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: relative;
  button {
    color: var(--text);
  }
`;
const ModalEl = styled.div`
  position: fixed;
  z-index: 10;
  width: max-content;
  height: max-content;
  background: var(--bg);
  opacity: 1;
  color: var(--text);
  margin: auto;
  inset: 0;
  box-shadow: 0px 0px 8px -2px var(--text);
  border-radius: var(--border-md);
  padding: 0.5rem 1rem;
`;

const ModalBackground = styled.div`
  z-index: 5;
  opacity: 0.5;
  background: #000;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

export default Modal;
