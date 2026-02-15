import { useState } from "react";
import API from "../api/axios";
import "./Home.css";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/notes", { title, content });
      alert("Note added");
      setTitle("");
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-layout">
      <div className="left-panel">
        <div className="notes-card">
          <h2 className="notes-title">Create Note</h2>

          <input
            className="notes-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="notes-textarea"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="notes-button" onClick={handleSubmit}>
            Add Note
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="hero-content">
          <h1>Notes App</h1>
          <p>Capture your thoughts instantly and stay organized.</p>
        </div>
      </div>
    </div>
  );
}