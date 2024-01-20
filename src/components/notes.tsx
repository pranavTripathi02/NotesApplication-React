import styled from "styled-components";
import Note from "./note";

function Notes() {
  return (
    <NotesWrapper>
      <div className="notes-grid">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </NotesWrapper>
  );
}

const NotesWrapper = styled.div`
  .notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-items: center;
    justify-content: center;
  }
`;

export default Notes;
