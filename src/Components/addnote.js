import {useState} from 'react';
import ColourPicker from './colourpicker';

const AddNote = ({handleNewNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [bgColour, setBgColour] = useState('#e7e7e7');
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
            handleNewNote(noteText, 'Untitled', bgColour);
        }
        else {
            handleNewNote(noteText, noteTitle, bgColour);
        }

        setNoteText(''); // clear new note text area upon submitting
        setNoteTitle('');
        setBgColour('#e7e7e7');
    };

    const handleClear = () => {
        setNoteText('');
        setNoteTitle('');
    };

    const newNoteColour = {backgroundColor: bgColour};

    return (
        <div className="note grow" style={newNoteColour} >

            <ColourPicker handleColourChange={setBgColour} currentColour={bgColour} />
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