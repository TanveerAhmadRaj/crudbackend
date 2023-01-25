//--------------Backend Logic
const express = require("express")
const cors = require("cors")
const port = 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

const PostCrt = require("./controllers/postController")

app.post("/create-post", PostCrt.createPost)
app.get("/posts", PostCrt.allposts)
app.get("/:id", PostCrt.post)
app.put("/:id", PostCrt.updatePost)
app.delete("/:id", PostCrt.deletePost)
app.get("/", (req, res)=>{ res.json({Meaasge: "Hello CRUD"})})
app.listen(port, ()=>{ console.log(`app is listing on:${port}`);})



