import "./App.css";
import Navbar from "./components/navbar";
import NewNoteBtn from "./components/newNoteBtn";
import NewNoteBtnSticky from "./components/newNoteBtnSticky";
import Notes from "./components/notes";

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <NewNoteBtn />
        <Notes />
        <NewNoteBtnSticky />
      </main>
    </>
  );
}

export default App;
