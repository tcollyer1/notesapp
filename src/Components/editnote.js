
import {useState} from 'react';
import ColourPicker from './colourpicker';

const EditNote = ({index, id, text, title, colour, date, setEditedNote}) => {
    const [noteText, setNoteText] = useState(text);
    const [noteTitle, setNoteTitle] = useState(title);
    const [bgColour, setBgColour] = useState(colour);
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
            setEditedNote(id, 'Untitled', noteText, bgColour, date, index);
        }
        
        else {
            setEditedNote(id, noteTitle, noteText, bgColour, date, index);
        }
    };

    const handleClear = () => {
        setNoteText('');
        setNoteTitle('');
    };

    const handleCancel = () => {
        setEditedNote(id, title, text, colour, date, index);
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
                    <button className="save-edit" onClick={handleSubmit}>Update</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </div>
                
            </div>
        </div>
    );
}

export default EditNote;