import { useEffect, useState } from "react";
import { TNote } from "../../types";
import Icon from "../../utils/Icons";
import styled from "styled-components";
import { addNote, editNote } from "../../reducer/features/notesList";
import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";

function CreateNoteModal({ toggleModal }: { toggleModal: () => void }) {
  const dispatch = useDispatch<any>();
  const { selectedNote: note } = useModal();

  const [noteInfo, setNoteInfo] = useState({
    title: "",
    description: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    if (note) {
      setNoteInfo({
        title: note.title,
        description: note.description,
        content: note.content,
        tags: note.tags?.join(",") || "",
      });
    }
  }, []); //eslint-disable-line

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check if required fields are present
    if (
      noteInfo.title.length < 1 ||
      noteInfo.description.length < 1 ||
      noteInfo.content.length < 1
    ) {
      // turn off modal and return if missing fields while note is selected
      if (note) {
        toggleModal;
        return;
      }
      // reset modal info
      setNoteInfo({
        title: "",
        description: "",
        tags: "",
        content: "",
      });
      return;
    }
    if (note) {
      const payload: Partial<TNote> = {
        title: noteInfo.title,
        description: noteInfo.description,
        content: noteInfo.content,
        tags: noteInfo.tags?.split(",") || [],
      };
      dispatch(editNote({ id: note.id, newNote: payload }));
    } else {
      const payload: Partial<TNote> = {
        title: noteInfo.title,
        description: noteInfo.description,
        content: noteInfo.content,
        tags: noteInfo.tags?.split(",") || [],
      };
      dispatch(addNote({ note: payload }));
    }
    toggleModal();
  };

  return (
    <>
      <Wrapper>
        <div className="header">
          <h5>{note ? "Edit Note" : "New Note"}</h5>
          <button onClick={toggleModal}>
            <Icon
              name="closeBtn"
              size={24}
            />
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            <div className="flex flex-col">
              <input
                id="noteTitle"
                type="text"
                placeholder="Note Title"
                required
                value={noteInfo.title}
                onChange={(e) =>
                  setNoteInfo({ ...noteInfo, title: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <input
                id="noteDesc"
                type="text"
                placeholder="Note Description"
                required
                value={noteInfo.description}
                onChange={(e) =>
                  setNoteInfo({ ...noteInfo, description: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <input
                id="noteTags"
                type="text"
                placeholder="Comma separated tags"
                value={noteInfo.tags}
                onChange={(e) =>
                  setNoteInfo({
                    ...noteInfo,
                    tags: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <input
                id="noteContent"
                type="text"
                value={noteInfo.content}
                onChange={(e) =>
                  setNoteInfo({
                    ...noteInfo,
                    content: e.target.value,
                  })
                }
                required
                placeholder="Note Content"
              />
            </div>
          </form>
          <div className="footer flex">
            <button
              className="closeModal"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="addNote"
              onClick={(e) => handleSubmit(e)}
            >
              Add
            </button>
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
  form > * {
    margin: 1rem 0;
  }
  input {
    border: none;
    border-radius: var(--border-sm);
    padding: 0.5rem 1rem;
    background: var(--text);
  }
  .header {
    display: flex;
    items-align: center;
    font-size: 1.5rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--bg-alt);
  }
  .footer {
    /* border-top: 1px solid var(--bg-alt); */
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
  }
  .footer > .closeModal {
    border-radius: var(--border-md);
    border: 1px solid var(--bg);
    margin: 0 1rem 0 0;
    padding: 0.5rem 1rem;
    background: var(--bg);
    color: var(--tex);
  }
  .footer > .addNote {
    border-radius: var(--border-md);
    padding: 0.5rem 1.5rem;
    color: var(--bg);
    background: var(--text);
  }
`;

export default CreateNoteModal;
