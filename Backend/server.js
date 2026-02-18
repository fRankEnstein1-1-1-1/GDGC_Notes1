const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// Mongo connection
mongoose.connect(process.env.MONGO_URL )
.then(()=>{console.log("Mongod Connected")})
.catch((e)=>{console.log("cant connect to mongodb",e)})

// Database models
const noteSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },

    } ,{timeStamp:true}
)
const Note = mongoose.model("Note",noteSchema)

// Rest Api's

// create
app.post("/notes", async (req,res)=>{
    try{
        const {title ,content} = req.body;
        const newNote = new Note({
            title,
            content
        })
        const savednote = await newNote.save()
        res.status(201).json({data:savednote,message:"New note created"})
    }
    catch(e){
        res.status(500).json({message:"Error creating notes"})
    }
})

//view /Read
app.get("/notes",async(req,res)=>{
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.json(notes)
    }
    catch(e){
        res.status(500).json({message:"Cant view notes"})
    }
})

//edit /update
app.put("/notes/:id",async (req,res)=>{
    try{
const {title,content} = req.body;
const edit = await Note.findByIdAndUpdate( req.params.id,
    {title,content},
    {new:true}
)
res.status(201).json({data:edit,message:"Editted"})
    }
catch(error){
res.status(500).json({message:"Cant Update Notes"})
}
}
)

// delete
app.delete("/notes/:id",async(req,res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.json({message:"Sucessfully Deleted Message"})
    }
    catch(error){
        res.status(500).json({message:"Cant delete notes"})
    }
})

const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server is running !")
})