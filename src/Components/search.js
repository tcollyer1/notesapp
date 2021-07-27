import {MdSearch} from 'react-icons/md';
import {ImCancelCircle} from 'react-icons/im';

const Search = ({handleNoteSearch}) => {

    const clearText = () => {
        document.getElementById('search').value = ''
        handleNoteSearch('');
    } 

    return(
        <div className="search-container">
            <MdSearch className="search-icon" size="1.3em" />
            <input id="search" onChange={({target}) => handleNoteSearch(target.value)} className="search-bar" type="text" placeholder="Type to filter notes..."></input>
            <ImCancelCircle className="search-clear-icon" onClick={clearText} size="1.3em" />
        </div>
    );
}

export default Search;