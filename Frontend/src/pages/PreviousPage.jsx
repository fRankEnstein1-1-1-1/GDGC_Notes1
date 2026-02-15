import { useEffect, useState } from "react";
import API from "../api/axios";

export default function PreviousNotes() {

    const [notes,setNotes] = useState([]);

    const fetchNotes = async () => {
        const res = await API.get("/notes");
        setNotes(res.data);
    };

    useEffect(()=>{
        fetchNotes();
    },[]);

    const deleteNote = async (id) => {
        await API.delete(`/notes/${id}`);
        fetchNotes();
    };

    const editNote = async (note) => {

        const newTitle = prompt("Edit title", note.title);
        const newContent = prompt("Edit content", note.content);

        await API.put(`/notes/${note._id}`, {
            title:newTitle,
            content:newContent
        });

        fetchNotes();
    };

    return (
        <div style={{padding:"20px"}}>

            {notes.map(note => (
                <div key={note._id} style={{border:"1px solid",margin:"10px",padding:"10px"}}>

                    <h3>{note.title}</h3>
                    <p>{note.content}</p>

                    <button onClick={()=>editNote(note)}>Edit</button>
                    <button onClick={()=>deleteNote(note._id)}>Delete</button>

                </div>
            ))}

        </div>
    );
}
