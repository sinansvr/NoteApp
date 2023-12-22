import { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import axios from "axios";


const Home = () => {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const BASE_URL="https://svr-noteapp-server.vercel.app/notes/"
    try {
      const response = await axios(`${BASE_URL}`)
      setNotes(response.data.data)
      console.log(response.data.data)
      console.log(notes)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotes()    
  }, [])
  

  return (
    <>
      <AddNote notes={notes} setNotes={setNotes} getNotes={getNotes} />
      <NoteList getNotes={getNotes} notes={notes}/>
    </>
  );
};

export default Home;
