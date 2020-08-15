import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const signOut = () => {
        window.localStorage.removeItem('token');
    }
   
    return (
        <div className="link-nav">
            <Link to="/">Login</Link>
            <nav>
                <Link to="colors">Bubbles</Link>
                <Link to="/login" onClick={signOut}>Sign Out</Link>
            </nav>
        </div>
    )
    

    
}

