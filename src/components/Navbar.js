import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <nav>
            <FontAwesomeIcon icon="fa-regular fa-paper-plane" className="fa-paperplane" />
            <h3>my travel journal</h3>
        </nav>
    )
}