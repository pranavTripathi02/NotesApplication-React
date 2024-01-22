import styled from "styled-components";
import useModal from "../../hooks/useModal";
import { TModalEnum } from "../../context/modalContext";
import Icon from "../../utils/Icons";

function ViewNoteModal({ toggleModal }: { toggleModal: () => void }) {
  const { selectedNote, changeModal } = useModal();
  if (!selectedNote) {
    toggleModal;
    return null;
  }
  const { id, title, description, content, tags, createdOn, lastModified } =
    selectedNote;
  const handleEditModal = () => {
    const modalType: TModalEnum = "create";
    changeModal(modalType);
    // toggleModal();
  };
  let date = new Date(createdOn);
  const createdDate =
    date.toLocaleDateString() + " " + date.toLocaleTimeString();
  date = new Date(lastModified);
  const modDate = date.toDateString() + " " + date.toLocaleTimeString();
  return (
    <>
      <Wrapper>
        <div className="header">
          <h5 className="note-title">{title}</h5>
          <div className="header-btns">
            <button onClick={handleEditModal}>
              <Icon
                name="pencil"
                size={24}
              />
            </button>
            <button onClick={toggleModal}>
              <Icon
                name="closeBtn"
                size={24}
              />
            </button>
          </div>
        </div>
        <div className="note-desc">Description: {description}</div>
        <div className="note-tags">
          {tags && tags.length > 0 && (
            <div className="tags">
              Tags:
              {tags.map(
                (tag) =>
                  tag && (
                    <span
                      key={id}
                      className="tag"
                    >
                      {tag}
                    </span>
                  ),
              )}
            </div>
          )}
        </div>
        <div className="note-content">{content}</div>
        <div className="flex flex-col justify-between">
          <div className="footer flex">
            <span>Created On: {createdDate}</span>
            <span>Last Modified: {modDate}</span>
          </div>
        </div>
      </Wrapper>
      <div
        className="inset-0 absolute h-full w-full bg-black opacity-50 z-10 "
        onClick={toggleModal}
      />
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 1rem;
  width: clamp(10rem, 50vw, 50rem);
  height: fit-content;
  .flex {
    display: flex;
  }
  .justify-between {
    justify-content: between;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .header {
    display: flex;
    items-align: center;
    font-size: 1.5rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--bg-alt);
  }
  .header > .note-title {
    width: 70%;
    overflow: hidden;
  }
  .header > .header-btns {
    align-self: center;
  }
  .header > .header-btns > * {
    margin: 0 0 0 0.25rem;
  }
  .note-content {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
    border: 1px solid var(--bg);
  }
  .footer {
    padding: 0.5rem 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export default ViewNoteModal;
