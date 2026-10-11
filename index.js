const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuid4} =require("uuid");
const methodOverride =require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuid4(),
    username: "iamketann_",
    caption: "Here is my Dog",
    image: "https://imgs.search.brave.com/CmCgSZ2vZF84-vzEZwNq8_a0BGOpf8oS6DwpnXIQqHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/MC8wMS8xOC81My9j/b3JnaS02NjczMzQz/XzY0MC5qcGc",
  },
  {
     id: uuid4(),
    username: "not.aman",
    caption: "Here is my Bike",
    image:
      "https://imgs.search.brave.com/6ppbmwi9dsOXHny2Zl83MEidIYvj0s27XR5ZgibWnLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5hdXRvY2FyaW5k/aWEuY29tL3N0YXRp/Yy9uZXdzL2ltYWdl/cy8yMDI2MDUyMl8w/OTI1MzZfOTVhMzFm/NjkuanBnP3c9NzI4/JnE9NzUmZm09YXV0/bw",
  },
  {
     id: uuid4(),
    username: "Sanket18",
    caption: "Here is my Car",
    image:"https://imgs.search.brave.com/4sh30HORxeLa0n983FqtsqmJw20P2WZlAwfgwDPzKZc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL21lZGlhL21v/ZGVscy80NDQvaW50/ZXJpb3IvOTIud2Vi/cA",
  }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let { username ,caption ,image} = req.body;
    let id = uuid4() ;
    
    posts.push({id,username ,caption ,image});
    console.log(req.body);
    res.redirect("/posts");

});

app.get("/posts/:id",(req,res)=>{
  let {id}= req.params;
  let post =posts.find((p)=> id ===p.id);
  console.log(post);
  if(!post){
    return res.status(400).send("Post not found");
  }
  res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
  let {id}= req.params;
  let post = posts.find((p)=>id === p.id);
  res.render("edit.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
  let { id } = req.params;
  console.log("BODY:", req.body);
  let newCaption = req.body.caption;
  let newImage =req.body.image;
  console.log("NEW CONTENT:", newCaption, newImage);
  let post = posts.find((p) => id === p.id);
  console.log("BEFORE:", post);
  post.caption = newCaption;
  post.image =newImage;
  console.log("AFTER:", post);
  res.redirect("/posts");
});
app.delete("/posts/:id" ,(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
