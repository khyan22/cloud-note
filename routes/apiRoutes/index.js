const router = require('express').Router();
const path = require('path');
const fs = require('fs');
//generates random id 
const { v4: uuidv4 } = require('uuid');

//retrieves data base
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

//lets user create new notes 
router.post('/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('db/db.json'));
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };

    data.push(newNote);

    fs.writeFileSync('db/db.json', JSON.stringify(data));

    res.json(data);
});

//allows the user to delete notes
router.delete('/notes/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('db/db.json'));
    let deleteNote = data.filter(note => note.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(data);
});

module.exports = router;