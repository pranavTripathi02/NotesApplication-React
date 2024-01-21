import styled from "styled-components";
import Note from "./note";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/store";
import { useEffect, useState } from "react";
import { TFilter, TNote } from "../types";
import FilterBox from "./filterBox";

function Notes() {
  const notesList = useSelector((state: RootState) => state.notes);
  const filters = useSelector((state: RootState) => state.filters);

  // const [filteredNotes, setFilteredNotes] = useState<TNote[]>([]);

  console.log(notesList, filters);
  const newNotesList = notesList;
  // console.log(newNotesList);

  const filterNotes = () => {
    // console.log("filtering");
    // console.log(newNotesList);
    const compareStrings = (a: string, b: string) => {
      const A = a.toUpperCase();
      const B = b.toUpperCase();
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    };
    // switch (filters.filter) {
    // case "title":
    //   if (filters.sortAsc) setFilteredNotes(newNotesList.sort());
    //   else
    //     setFilteredNotes(
    //       newNotesList.sort((a, b) => compareStrings(b.title, a.title)),
    //     );
    //   break;
    // case "createdOn":
    //   if (filters.sortAsc)
    //     setFilteredNotes(
    //       newNotesList.sort((a, b) => a.createdOn - b.createdOn),
    //     );
    //   else
    //     setFilteredNotes(
    //       newNotesList.sort((a, b) => b.createdOn - a.createdOn),
    //     );
    //   break;
    // case "lastModified":
    //   if (filters.sortAsc)
    //     setFilteredNotes(
    //       newNotesList.sort((a, b) => a.lastModified - b.lastModified),
    //     );
    //   else
    //     setFilteredNotes(
    //       newNotesList.sort((a, b) => b.lastModified - a.lastModified),
    //     );
    //   break;
    switch (filters.filter) {
      case "title":
        if (filters.sortAsc)
          newNotesList.sort((a, b) => compareStrings(a.title, b.title));
        else newNotesList.sort((a, b) => compareStrings(b.title, a.title));
        break;
      case "createdOn":
        if (filters.sortAsc)
          newNotesList.sort((a, b) => a.createdOn - b.createdOn);
        else newNotesList.sort((a, b) => b.createdOn - a.createdOn);
        break;
      case "lastModified":
        if (filters.sortAsc)
          newNotesList.sort((a, b) => a.lastModified - b.lastModified);
        else newNotesList.sort((a, b) => b.lastModified - a.lastModified);
        break;
      default:
        newNotesList;
    }
  };

  useEffect(() => {
    filterNotes();
  }, [notesList, filters.sortAsc, filters.filter]); //eslint-disable-line

  if (!newNotesList?.length) return null;

  return (
    <NotesWrapper>
      <div className="filters">
        <FilterBox />
      </div>
      <div className="notes-grid">
        {newNotesList.map(
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
