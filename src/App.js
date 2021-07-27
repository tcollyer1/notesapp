import './App.css';
import React, {useState, useEffect} from 'react';
import NotesList from './Components/noteslist';
import Search from './Components/search';
import Header from './Components/header';
import {nanoid} from 'nanoid';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Dependency array is empty - will only run on first load. Retrieves saved notes (if any)
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('all-notes'));

    if (storedNotes) setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever our notes array is updated, which is the dependency array - keeps notes up to date!
  useEffect(() => {
    localStorage.setItem('all-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (...newNoteText) => {
    var today = new Date();

    setNotes((prev) => ([{
      id: nanoid(),
      title: newNoteText[1],
      text: newNoteText[0],
      date: today.toLocaleDateString()
    }, ...prev
    ]));
  } 

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  }

  // ==--- && SYNTAX ---==
  // The && syntax below will return the second value, in other words will apply the dark-mode class, if and only if
  // the first value, the darkMode state, is truthy (so not false, 0, NaN, or an empty string - those are falsy).
  // If the first value is falsy, it returns the first value instead of the second. 

  // E.g. 
  //      true && 'hello' 
  //      would return 'hello' (see React folder 82.)
  //          while 0 && 'goodbye'
  //          would return 0

  return (
    <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <Header handleDarkModeToggle={setDarkMode} currentMode={darkMode} />
        <Search handleNoteSearch={setSearchText} />
        <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );

}

// export default App;
