import {useState} from 'react';

const AddNote = ({handleNewNote}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 500;

    const handleChange = ({target}) => {
        var currentText = target.value;

        if (charLimit - currentText.length >= 0) {
            setNoteText(currentText);
        }

    }; 

    const handleSubmit = () => { 
        if (noteText.trim().length <= 0) {
            alert("Note is empty");
            setNoteText('');
            return; // if note is empty or just spaces/new lines, do not allow it to be submit
        }

        handleNewNote(noteText);
        setNoteText(''); // clear new note text area upon submitting
    };

    const handleClear = () => {
        setNoteText('');
    }

    return (
        <div className="note new grow">

            <textarea id="description"
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            onChange={handleChange}
            value={noteText}>              
            </textarea>

            <div className="note-footer">
                <small>{charLimit - noteText.length} remaining</small>
                <div>
                    <button className="clear" onClick={handleClear}>Clear</button>
                    <button className="save" onClick={handleSubmit}>Add note</button>
                </div>
                
            </div>
        </div>
    );
}

export default AddNote;