import { useState } from "react";
import API from "../api/axios";

export default function Home() {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    const handleSubmit = async () => {
        try{
            await API.post("/notes", {
                title,
                content
            });

            alert("Note added");

            setTitle("");
            setContent("");

        }catch(err){
            console.log(err);
        }
    };

    return (
        <div style={{padding:"20px"}}>

            <input
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <br/><br/>

            <textarea
                placeholder="Write note..."
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />

            <br/><br/>

            <button onClick={handleSubmit}>
                Add Note
            </button>

        </div>
    );
}
