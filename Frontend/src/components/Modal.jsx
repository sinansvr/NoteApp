import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Modal = ({ editItem, getNotes }) => {

    const { _id, title: oldTitle, description: oldDescription } = editItem

    const [title, setTitle] = useState(oldTitle)
    const [description, setDescription] = useState(oldDescription)

    useEffect(() => {
        setTitle(oldTitle)
        setDescription(oldDescription)

    }, [oldDescription, oldTitle])


    const editNote = async (note) => {
        const BASE_URL = "https://svr-noteapp-server.vercel.app/notes/"
        try {
            await axios.put(`${BASE_URL}${_id}`, note)
        } catch (error) {
            console.log(error)
        }
        getNotes();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editNote({ title, description })
        console.log(title, description)
    }

    return (

        <div
            className="modal fade"
            id="openModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-success" id="exampleModalLabel">
                            Edit Note
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                setDescription("")
                                setTitle("")
                            }}
                        />
                    </div>
                    <div className="modal-body">
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
                                    value={title || ""}
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
                                    value={description || ""}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />

                            </div>
                            <div className='text-end'>
                                <button
                                    type="submit"
                                    className="btn btn-success mb-4"
                                    data-bs-dismiss="modal"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Modal