import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { useEffect, useState } from "react"
import axios from "axios"

const TutorialList = () => {

  const [notes, setNotes] = useState([])

  const getNotes= async()=>{
    try {
      const response = await axios("https://svr-noteapp-server.vercel.app/tutorials/")
      
      setNotes(response.data.data)
      console.log(notes)
    } catch (error) {
      console.log(error)
    }   
  }

  const tutorials = []

 useEffect(() => {
   
  getNotes()
   
 }, [])
 
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {notes?.map((item) => {
            const { _id, title, description } = item
            return (
              <tr key={_id}>
                <th>{_id}</th>
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

export default TutorialList
