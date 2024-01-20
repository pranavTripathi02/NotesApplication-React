import "./App.css";
import Navbar from "./components/navbar";
import NewNoteBtn from "./components/newNoteBtn";
import NewNoteBtnSticky from "./components/newNoteBtnSticky";
import Notes from "./components/notes";
import Modal from "./components/Modals/Modal";
import { ModalContextProvider } from "./context/modalContext";

function App() {
  return (
    <>
      <ModalContextProvider>
        <Modal />
        <Navbar />
        <main className="content">
          <NewNoteBtn />
          <Notes />
          <NewNoteBtnSticky />
        </main>
      </ModalContextProvider>
    </>
  );
}

export default App;
