'Content-Type': 'application/json'
},
body: JSON.stringify(note),
body: JSON.stringify(note)
});

const deleteNote = (id) =>
fetch(`/api/notes/${id}`, {
method: 'DELETE',
headers: {
  'Content-Type': 'application/json',
},
  'Content-Type': 'application/json'
}
});

const renderActiveNote = () => {
hide(saveNoteBtn);
hide(clearBtn);

if (activeNote.id) {
show(newNoteBtn);
noteTitle.setAttribute('readonly', true);
noteText.setAttribute('readonly', true);
noteTitle.value = activeNote.title;
noteText.value = activeNote.text;
} else {
hide(newNoteBtn);
noteTitle.removeAttribute('readonly');
noteText.removeAttribute('readonly');
noteTitle.value = '';
@@ -69,7 +75,7 @@ const renderActiveNote = () => {
const handleNoteSave = () => {
const newNote = {
title: noteTitle.value,
text: noteText.value,
text: noteText.value
};
saveNote(newNote).then(() => {
getAndRenderNotes();
@@ -105,11 +111,16 @@ const handleNoteView = (e) => {
// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
activeNote = {};
show(clearBtn);
renderActiveNote();
};

const handleRenderSaveBtn = () => {
if (!noteTitle.value.trim() || !noteText.value.trim()) {
// Renders the appropriate buttons based on the state of the form
const handleRenderBtns = () => {
show(clearBtn);
if (!noteTitle.value.trim() && !noteText.value.trim()) {
hide(clearBtn);
} else if (!noteTitle.value.trim() || !noteText.value.trim()) {
hide(saveNoteBtn);
} else {
show(saveNoteBtn);
@@ -176,8 +187,8 @@ const getAndRenderNotes = () => getNotes().then(renderNoteList);
if (window.location.pathname === '/notes') {
saveNoteBtn.addEventListener('click', handleNoteSave);
newNoteBtn.addEventListener('click', handleNewNoteView);
noteTitle.addEventListener('keyup', handleRenderSaveBtn);
noteText.addEventListener('keyup', handleRenderSaveBtn);
clearBtn.addEventListener('click', renderActiveNote);
noteForm.addEventListener('input', handleRenderBtns);
}

getAndRenderNotes();
