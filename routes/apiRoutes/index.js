const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

router.post('/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('db/db.json'));
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };

    data.push(newNote);

    fs.writeFileSync('db/db.json', JSON.stringify(data));

    res.json(data)
});

router.delete('/notes/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('db/db.json'));
    let deleteNote = data.filter(note => note.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote))
    res.json(data);
});

module.exports = router