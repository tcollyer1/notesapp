import {useState} from 'react';

const AddNote = ({handleNewNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const charLimit = 500;
    const titleCharLimit = 22;

    const handleChange = ({target}) => {
        var currentText = target.value;

        if (charLimit - currentText.length >= 0) {
            setNoteText(currentText);
        }

    }; 

    const handleTitleChange = ({target}) => {
        var currentText = target.value;

        if (titleCharLimit - currentText.length >= 0) {
            setNoteTitle(currentText);
        }
    };

    const handleSubmit = () => { 
        if (noteText.trim().length <= 0) {
            alert("Note is empty");
            setNoteText('');
            return; // if note is empty or just spaces/new lines, do not allow it to be submit
        }

        if (noteTitle.trim().length <= 0) {
            handleNewNote(noteText, 'Untitled');
        }
        else {
            handleNewNote(noteText, noteTitle);
        }

        setNoteText(''); // clear new note text area upon submitting
        setNoteTitle('');
    };

    const handleClear = () => {
        setNoteText('');
        setNoteTitle('');
    }

    return (
        <div className="note new grow">

            <div className="new-note-header">
                <textarea className="note-title"
                rows="2"
                cols="10"
                placeholder="Note title"
                onChange={handleTitleChange}
                value={noteTitle}>
                </textarea>

                <textarea className="note-description"
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                onChange={handleChange}
                value={noteText}>              
                </textarea>
            </div>
            

            <div className="note-footer">
                <small>{charLimit - noteText.length} left</small>
                <div>
                    <button className="clear" onClick={handleClear}>Clear</button>
                    <button className="save" onClick={handleSubmit}>Add note</button>
                </div>
                
            </div>
        </div>
    );
}

export default AddNote;