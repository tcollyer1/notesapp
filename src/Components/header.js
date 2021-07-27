const Header = ({handleDarkModeToggle, currentMode}) => {

    var btnTxt = currentMode ? '☀️ Enable light mode' : '🌙 Enable dark mode'

    return (
        <div className="header">
            <h1>Notes App</h1>
            <button onClick={() => handleDarkModeToggle((prev) => prev ? false : true)}>{btnTxt}</button>
        </div> 
    );
}

export default Header; 