import React from "react";
import "./style.css";
import logo from "../..//images/react-logo.png"

function Footer () {
    return (
        <>

        <footer className="footer">
            <div className="bottom">
                Futurama Memory Game 
                <img alt="react" src={logo}></img>
            </div>
        </footer>



        </>
    );
}

export default Footer