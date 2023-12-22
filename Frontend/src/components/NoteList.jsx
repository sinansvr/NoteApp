import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"

const NoteList = ({ notes, setNotes, getNotes }) => {

  const handleDelete = async (_id) => {
    const BASE_URL = "https://svr-noteapp-server.vercel.app/notes/"
    try {      
    await axios.delete(`${BASE_URL}${_id}`)
    } catch (error) {
      console.log(error)
    }
    getNotes()
  }

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
