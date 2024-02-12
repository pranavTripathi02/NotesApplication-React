import styled from "styled-components";
// import trashSvg from "./assets/trash.svg";
import Icon from "../utils/Icons";
import { TNote } from "../types";
import { useDispatch } from "react-redux";
import { noteRemove } from "../reducer/features/notesList";
import useModal from "../hooks/useModal";
import { TModalEnum } from "../context/modalContext";

function Note({ note }: { note: TNote }) {
  const dispatch = useDispatch();
  const { toggleModal, setSelectedNote, changeModal } = useModal();
  const handleOpenNote = () => {
    const modalType: TModalEnum = "view";
    setSelectedNote(note);
    changeModal(modalType);
    toggleModal();
  };
  const handleEditModal = () => {
    const modalType: TModalEnum = "create";
    setSelectedNote(note);
    changeModal(modalType);
    toggleModal();
  };

  const handleNoteDelete = () => {
    dispatch(noteRemove(note.id));
  };

  const { id, title, description, lastModified, tags } = note;
  const date = new Date(lastModified);
  return (
    <NoteWrapper>
      <div>
        <div className="note-header">
          <span
            className="note-title"
            onClick={handleOpenNote}
          >
            {title}
          </span>
          <div className="note-actions">
            <button onClick={handleEditModal}>
              <Icon
                name="pencil"
                size={20}
              />
            </button>
            <button onClick={handleNoteDelete}>
              <Icon
                name="closeBtn"
                size={24}
              ></Icon>
            </button>
          </div>
        </div>
        <div
          className="note-desc"
          onClick={handleOpenNote}
        >
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
          <p>{description}</p>
        </div>
      </div>
      <span className="last-modified">
        Last Modified: {date.toDateString()} {date.getHours()}:
        {date.getMinutes()}
      </span>
    </NoteWrapper>
  );
}

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  width: 300px;
  /* background: var(--bg-alt); */
  border: 1px solid var(--text-alt);
  border-radius: var(--border-sm);
  margin: 1rem;
  background: radial-gradient(
    circle 100rem at 50% -60%,
    rgba(0, 0, 0, 0) 0%,
    #000 15%
  );
  transition: all 0.5s ease-out;
  cursor: default;
  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0px 2px 4px -2px #ddd;
  }
  .note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 2px solid var(--bg); */
    border-bottom: 1px solid var(--text-alt);
    padding: 0.5rem 1rem;
    font-weight: 700;
  }
  .note-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: full;
    padding: 0rem 1rem;
    overflow: clip;
  }
  .last-modified {
    text-align: right;
    padding: 5px;
    opacity: 0.5;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: clip;
    padding: 0.25rem 0;
  }
  .note-title {
    width: 70%;
    overflow: hidden;
  }
  .tag {
    padding: 0 1rem;
    border-radius: var(--border-lg);
    border: 1px solid var(--text-alt);
    color: var(--text-alt);
    margin: 0 0.25rem;
  }
  .note-actions {
    display: flex;
  }
  button {
    background: none;
    cursor: pointer;
    border: none;
    padding: 0px;
    margin: 0 0 0 5px;
    /* border-radius: var(--border-full); */
  }
  svg {
    color: #adb5bd;
  }
`;

export default Note;
