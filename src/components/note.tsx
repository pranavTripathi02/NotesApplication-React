import styled from "styled-components";
// import trashSvg from "./assets/trash.svg";
import Icon from "../utils/Icons";
import { TNote } from "../types";
import { useDispatch } from "react-redux";
import { noteRemove } from "../reducer/features/notesList";
import useModal from "../hooks/useModal";

function Note({ note }: { note: TNote }) {
  const dispatch = useDispatch();
  const { toggleModal, setSelectedNote } = useModal();
  const handleEditModal = () => {
    setSelectedNote(note);
    toggleModal();
  };

  const handleNoteDelete = () => {
    dispatch(noteRemove(note.id));
  };

  const { title, description, lastModified, tags } = note;
  const date = new Date(lastModified);
  return (
    <NoteWrapper>
      <div>
        <div className="note-header">
          <span>{title}</span>
          <div className="note-actions">
            <button onClick={handleEditModal}>
              <Icon
                name="pencil"
                size={20}
                color="#262"
              />
            </button>
            <button onClick={handleNoteDelete}>
              <Icon
                name="closeBtn"
                size={24}
                color="#d22"
              ></Icon>
            </button>
          </div>
        </div>
        <div className="note-desc">
          {tags && tags.length > 1 && (
            <div className="tags">
              {tags.map((tag) => tag && <span className="tag">{tag}</span>)}
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
  background: var(--bg-alt);
  border-radius: var(--border-md);
  margin: 1rem;
  &:hover {
    cursor: default;
    box-shadow: var(--box-shadow);
  }
  .note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--bg);
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
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
  }
  .tag {
    padding: 0 1rem;
    border-radius: var(--border-lg);
    border: 1px solid var(--text-alt);
    color: var(--text-alt);
    margin: 0.5rem 0.5rem 0 0;
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
`;

export default Note;
