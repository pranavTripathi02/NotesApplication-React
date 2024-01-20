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
`;
const ModalEl = styled.div`
  position: fixed;
  z-index: 10;
  width: max-content;
  height: max-content;
  background: var(--text);
  opacity: 1;
  color: var(--bg);
  margin: auto;
  inset: 0;
  border-radius: var(--border-md);
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
