import { useState } from "react";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import axios from "axios";


const Home = () => {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    try {
      const response = await axios("https://svr-noteapp-server.vercel.app/tutorials/")
      setNotes(response.data.data)
      console.log(notes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AddNote notes={notes} setNotes={setNotes} getNotes={getNotes} />
      <NoteList getNotes={getNotes}/>
    </>
  );
};

export default Home;
