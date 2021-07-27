import {MdDeleteForever} from 'react-icons/md'; // delete icon

// Note component. This will be the design of a single note on the page.

const Note = ({id, text, date, handleDeleteNote}) => {

    return ( 
        <div className="note grow">
            <span>{text}</span>

            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
}

export default Note;