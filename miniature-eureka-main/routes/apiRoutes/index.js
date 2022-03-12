const router = require('express').Router();
const { notesData } = require('../../db/db');

router.get('/notes', (req, res) => {
    let notes = notesData;
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

});

router.delete('/notes/:id', (req, res) => {

});

module.exports = router;