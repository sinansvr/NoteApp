import { useState } from "react"
import axios from "axios"

const AddNote = ({ getNotes }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = { title, description }
    createNewNote(newNote)    
    setTitle("")
    setDescription("")
  }

  const createNewNote = async (newNote) => {
    const BASE_URL="https://svr-noteapp-server.vercel.app/notes/"
    try {
      await axios.post(BASE_URL, newNote)
    } catch (error) {
      console.log(error)
    }
    getNotes()  
  }

 



  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-success">Add Your Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your note's title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your note's Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddNote
