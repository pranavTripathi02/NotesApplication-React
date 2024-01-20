import styled from "styled-components";
// import trashSvg from "./assets/trash.svg";
import Icon from "../utils/Icons";

function Note() {
  return (
    <NoteWrapper>
      <div>
        <div className="note-header">
          <span>Lorem Ipsum</span>
          <button>
            <Icon
              name="closeBtn"
              size={24}
              color="#d22"
            ></Icon>
          </button>
        </div>
        <div className="note-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            obcaecati quod eveniet nisi! Velit, quo.
          </p>
        </div>
      </div>
      <span className="last-modified">Last Modified: 20th Jan 2024</span>
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
  .note-content {
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
  button {
    background: none;
    cursor: pointer;
    border: none;
    padding: 0px;
    /* border-radius: var(--border-full); */
  }
`;

export default Note;
