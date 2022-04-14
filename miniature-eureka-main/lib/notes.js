const fs = require('fs');
const path = require('path');
const data = require('../db/db.json')

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

function returnAfterDelete(body) {
    const noteArr = body;
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ data }, null, 2)
    );
    console.log(noteArr);
    return noteArr;
}

module.exports = {
    createNewNote,
    returnAfterDelete
}