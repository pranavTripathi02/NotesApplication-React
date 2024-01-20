import useModal from "../../hooks/useModal";

function ViewNoteModal({ toggleModal }: { toggleModal: () => void }) {
  const { selectedNote } = useModal();
  if (!selectedNote) {
    toggleModal;
    return null;
  }
  return <div>Viewing</div>;
}

export default ViewNoteModal;
