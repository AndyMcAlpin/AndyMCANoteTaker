const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let noteData = notes;
    res.json(noteData);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {

});

module.exports = router;