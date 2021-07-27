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

  const addNote = (...newNote) => {
    var today = new Date();

    setNotes((prev) => ([{
      id: nanoid(),
      title: newNote[1],
      text: newNote[0],
      colour: newNote[2],
      date: today.toLocaleDateString()
    }, ...prev
    ]));
  } 

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  }

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
