import React, {useState, useRef} from 'react';

function Header() {
    
    const modeImg = useRef(null);
    let darkMode = localStorage.getItem("darkMode");

    function enableDarkMode() {
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode", null);
    }

    if (darkMode == "enabled") {
        enableDarkMode();
    }

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
            <button id="modeToggle" onClick={modeToggle} ref={modeImg}>
                <img src={`/img/mode.png`} alt="🌞" title="Mode Toggle" height="2.2rem" id="modeImg" />
            </button>
            <h1 className="title">Scotland's Most Beautiful Places</h1>
            <img src="img/flag.jpg" alt="🌍" title="Scottish Flag"/>
        </div>
    )
}

export default Header