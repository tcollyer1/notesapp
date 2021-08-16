import Note from './note';
import AddNote from './addnote';
import EditNote from './editnote';

// NotesList component. This will store the list of all notes.

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, isEdit, noteInfo, setEditedNote }) => {
    return (
        <div className="notes-list">
            <AddNote handleNewNote={handleAddNote} handleEditNote={handleEditNote} />
            {notes.map(note => {

                if (isEdit && note.id === noteInfo.id) {
                    isEdit = false;
                    return (
                        <EditNote index={note.index} id={note.id} title={note.title} text={note.text} colour={note.colour} date={note.date} setEditedNote={setEditedNote} />
                    )
                }

                else {
                    return (
                        <Note index={note.index} id={note.id} title={note.title} text={note.text} colour={note.colour} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
                    )
                }

            })}
        </div>
    );
}

export default NotesList;