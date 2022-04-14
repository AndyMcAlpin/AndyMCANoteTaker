const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote, returnAfterDelete } = require('../../lib/notes');

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
    const result = notes.filter(note => note.id != req.params.id);
    const deleteNote = returnAfterDelete(result);
    res.json(deleteNote);
});

module.exports = router;