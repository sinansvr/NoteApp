import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { useEffect, useState } from "react"
import axios from "axios"

const NoteList = ({notes, setNotes,getNotes}) => {

  // const [notes, setNotes] = useState([])

  // const getNotes = async () => {
  //   try {
  //     const response = await axios("https://svr-noteapp-server.vercel.app/tutorials/")
  //     setNotes(response.data.data)
  //     console.log(notes)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleDelete = async (_id) => {
    await axios.delete(`https://svr-noteapp-server.vercel.app/tutorials/${_id}`)
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {notes?.map((item, index) => {
            const { _id, title, description } = item
            return (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => handleDelete(_id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default NoteList
