import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TravelCard(props) {
    return (
            <div className="card">
                <div className="img-card">
                    <img src={props.imgURL} />
                </div>
                <div className="block-info">
                    <div className="location-block">
                        <a href={props.googleMapsURL}><FontAwesomeIcon icon="fa-regular fa-map" className="fa-map" /></a>
                        <p className="location">{props.location}</p>
                    </div>
                    <h2 className="title">{props.title}</h2>
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
    )
}