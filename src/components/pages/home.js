import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
    return (
        <div className="homepage-wrapper">
            <h1>Welcome to the world of State and Hooks</h1>
            <h2>Feel free to roam around while exploring React States and Hooks</h2>
            <div className="icon-wrapper">
                    <FontAwesomeIcon icon={["fab", "react"]} />
            </div>
        </div>
    )
}