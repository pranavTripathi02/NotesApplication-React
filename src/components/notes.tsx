import styled from "styled-components";
import Note from "./note";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/store";
import { useEffect, useState } from "react";
import { TNote } from "../types";
import FilterBox from "./filterBox";

function Notes() {
  const notesList = useSelector((state: RootState) => state.notes);
  const filters = useSelector((state: RootState) => state.filters);

  const [filteredNotes, setFilteredNotes] = useState<TNote[]>([]);

  console.log(notesList, filters);

  const filterNotes = () => {
    switch (filters) {
      case "title":
        setFilteredNotes(notesList);
        break;
      case "date":
        setFilteredNotes(notesList);
        break;
      case "modified":
        setFilteredNotes(notesList);
        break;
      default:
        setFilteredNotes(notesList);
    }
  };

  useEffect(() => {
    filterNotes();
  }, [notesList, filters]);

  if (!filteredNotes.length) return null;

  return (
    <NotesWrapper>
      <div className="filters">
        <FilterBox />
      </div>
      <div className="notes-grid">
        {filteredNotes.map(
          (note: TNote) =>
            note && (
              <div key={note.id}>
                <Note note={note} />
              </div>
            ),
        )}
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
  .filters {
    margin: 1rem;
    max-width: 1180px;
    text-align: right;
  }
  @media (max-width: 1200px) {
    .filters {
      text-align: center;
    }
  }
`;

export default Notes;
