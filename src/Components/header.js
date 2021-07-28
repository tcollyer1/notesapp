const Header = ({handleDarkModeToggle, isDarkMode}) => {

    var btnTxt = isDarkMode ? '☀️ Enable light mode' : '🌙 Enable dark mode';

    return (
        <div className="header">
            <h1>Notes App</h1>
            <button onClick={() => handleDarkModeToggle((prev) => prev ? false : true)}>{btnTxt}</button>
        </div> 
    );
}

export default Header; 