import './App.css';
import React, {useState} from 'react';
import NotesList from './Components/noteslist';
import Search from './Components/search';
import {nanoid} from 'nanoid';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const addNote = (newNoteText) => {
    var today = new Date();

    setNotes((prev) => ([{
      id: nanoid(),
      text: newNoteText,
      date: today.toLocaleDateString()
    }, ...prev
    ]));
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  }

  return (
      <div className="container">
        <Search handleNoteSearch={setSearchText} />
        <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
      
  );

}

// export default App;
