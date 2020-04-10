const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(express.urlencoded({ extended: true }));
app.use(express,json());
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/notes.html'));

});

app.listen(3000);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});

app.listen(3000);

app.get("/api/notes", (req, res) => {


    const saveNote = req.body;
    saveNote.id = `/// save ID ///`
})

app.post("/api/notes", (req, res) => {


    const newNote = req.body;
    newNote.id = `/// create ID ///`
})

app.delete("/api/notes", (req, res) => {


    const deleteNote = req.body;
    deleteNote.id = `/// delete ID ///`
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)

})