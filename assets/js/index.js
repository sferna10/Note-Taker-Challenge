let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
    noteTitle = document.querySelector('.note-title');
    noteText = document.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
    noteList = document.querySelector('.list-container .list-group');
}
//Show an element
const show = (elem) => {
    elem.style.display = 'inline';
};
//Hide an element
const hide = (elem) => {
    elem.style.display = 'none';
};
//ActiveNote is used to keep track of the note in the textarea
let activeNote = {};

const getNotes = () =>
    fetch('/api/notes', {
    Method: 'GET',
    headers: {
        'Content-Type': 'applications/json',
    },
    });

    const saveNotes = (note) =>
    fetch('/api/notes', {
    Method: 'POST',
    headers: {
        'Content-Type': 'applications/json',
    },
    body: JSON.stringify(note),
    });

    const deleteNotes = (id) =>
    fetch(`/api/notes/${id}`, {
    Method: 'DELETE',
    headers: {
        'Content-Type': 'applications/json',
    },
    });

