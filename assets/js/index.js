let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
    noteTitle = document.querySelector('.note-title');
    noteText = docuement.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
    noteList = document.querySelector('.list-container .list-group');
}

const show = (elem) => {
    elem.style.display = 'inline';
};

const hide = (elem) => {
    elem.style.display = 'none';
};

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

