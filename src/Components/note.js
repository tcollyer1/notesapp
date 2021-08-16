import {MdDeleteForever, MdModeEdit} from 'react-icons/md'; // delete icon

// Note component. This will be the design of a single note on the page.

const Note = ({index, id, text, title, colour, date, handleDeleteNote, handleEditNote}) => {

    const startEdit = () => {
        handleEditNote(id, title, text, colour, date, index);
        console.log("Click to edit registered for " + id);
    }

    return (
        <div className="note grow" style={{backgroundColor: colour}}>
            <div>
                <p className="existing-note-title">{title}</p>
                <span className="existing-note-text">{text}</span>
            </div>

            <div className="note-footer">
                <small className="date-text">{date}</small>
                <div>
                    <MdModeEdit onClick={startEdit} className="edit-icon" size="1.3em" />
                    <MdDeleteForever onClick={() => handleDeleteNote(id, index)} className="delete-icon" size="1.3em" />
                </div>
                
            </div>
        </div>
    );
}

export default Note;