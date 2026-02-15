import { useEffect, useState } from "react";
import API from "../api/axios";
import "./PreviousNotes.css";

export default function PreviousNotes() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  const editNote = async (note) => {
    const newTitle = prompt("Edit title", note.title);
    const newContent = prompt("Edit content", note.content);

    if (!newTitle || !newContent) return;

    await API.put(`/notes/${note._id}`, {
      title: newTitle,
      content: newContent,
    });

    fetchNotes();
  };

  return (
    <div className="prev-container">
      <h2 className="prev-heading">Your Notes</h2>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>

            <div className="note-actions">
              <button
                className="btn-edit"
                onClick={() => editNote(note)}
              >
                Edit
              </button>

              <button
                className="btn-delete"
                onClick={() => deleteNote(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}