import React, {useState, useEffect} from 'react';

function Header() {
    
    const [mode, setMode] = useState("light");
    const [emoji, setEmoji] = useState("🌞");
    let darkMode = localStorage.getItem("darkMode");

    function enableDarkMode() {
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode", "enabled");
        setMode("dark");
        setEmoji("🌚");
    }

    function disableDarkMode() {
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode", null);
        setMode("light");
        setEmoji("🌞");
    }

    useEffect(() => darkMode === "enabled" ? enableDarkMode() : undefined);

    function modeToggle() {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode != "enabled") {
            enableDarkMode();
        }
        else {
            disableDarkMode();
        }
    }
    
    return (
        <div className="header">
            <button id="modeToggle" onClick={modeToggle}>
                <img src={`img/${mode}_mode.png`} alt={emoji} title="Mode Toggle" height="2.2rem" id="modeImg" />
            </button>
            <h1 className="title">Scotland's Most Beautiful Places</h1>
            <img src="img/flag.jpg" alt="🌍" title="Scottish Flag"/>
        </div>
    )
}

export default Header