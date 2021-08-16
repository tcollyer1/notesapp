import './App.css';
import React, { useState, useEffect } from 'react';
import NotesList from './Components/noteslist';
import Search from './Components/search';
import Header from './Components/header';
import { nanoid } from 'nanoid';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editNoteDetails, setEditNoteDetails] = useState({});

  // Dependency array is empty - will only run on first load. Retrieves saved notes (if any)
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('all-notes'));

    if (storedNotes) setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever our notes array is updated, which is the dependency array - keeps notes up to date!
  useEffect(() => {
    localStorage.setItem('all-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (...newNote) => { // spread syntax used here to imply this event handler is going to receive multiple parameters, therefore newNote becomes an array
    var noteIndex = 0;
    console.log("Adding note, index is " + noteIndex + ".");
    var today = new Date();


    // Increments indexes of every other note to accommodate for the new one, as the newest note is always added to the front
    let allNotesCopy = [...notes];
    allNotesCopy.forEach(note => note.index++);

    setNotes(() => ([{
      index: noteIndex,
      id: nanoid(),
      title: newNote[1], // access different parameters by indexes
      text: newNote[0],
      colour: newNote[2],
      date: today.toLocaleDateString()
    }, ...allNotesCopy
    ]));
  }

  const deleteNote = (...noteInfo) => {
    const noteId = noteInfo[0];
    const noteIndex = noteInfo[1];
    let modifiedNotes = [...notes];

    modifiedNotes.forEach(note => note.index > noteIndex ? note.index-- : note.index);
    setNotes(modifiedNotes.filter(note => note.id !== noteId));
  }

  const editNote = (...noteData) => {
    // change title and text of edited note using the ID
    console.log("note data for " + noteData[0] + " received, with title '" + noteData[1] + "' and text content '" + noteData[2] + "'.");
    setEditNoteDetails({
      id: noteData[0],
      title: noteData[1],
      text: noteData[2],
      colour: noteData[3],
      date: noteData[4],
      index: noteData[5]
    });

    setIsEditMode(true);
  }

  const setEditedNote = (...editedNote) => {
    let modifiedNotes = [...notes];
    let index = editedNote[5];

    const newNote = {
      index: editedNote[5],
      id: editedNote[0],
      title: editedNote[1],
      text: editedNote[2],
      colour: editedNote[3],
      date: editedNote[4]
    };

    modifiedNotes[index] = newNote;

    setNotes(modifiedNotes);
    setIsEditMode(false);
    setEditNoteDetails({});
  };

  return (
    <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <Header handleDarkModeToggle={setDarkMode} isDarkMode={darkMode} />
        <Search handleNoteSearch={setSearchText} />
        <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} handleEditNote={editNote} isEdit={isEditMode} noteInfo={editNoteDetails} setEditedNote={setEditedNote} />
      </div>
    </div>
  );

}
