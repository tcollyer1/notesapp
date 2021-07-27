import Note from './note';
import AddNote from './addnote';

// NotesList component. This will store the list of all notes.

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {

    return (  
        <div className="notes-list">
            <AddNote handleNewNote={handleAddNote} />
            {notes.map(note => (
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
            ))}    
        </div>
    );
}

export default NotesList;