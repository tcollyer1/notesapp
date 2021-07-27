import {MdDeleteForever} from 'react-icons/md'; // delete icon

// Note component. This will be the design of a single note on the page.

const Note = ({id, text, title, colour, date, handleDeleteNote}) => {
    console.log("Colour: " + colour);

    return (  
        <div className="note grow" style={{backgroundColor: colour}}>
            <div>
                <p className="existing-note-title">{title}</p>
                <span className="existing-note-text">{text}</span>
            </div>

            <div className="note-footer">
                <small className="date-text">{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
}

export default Note;