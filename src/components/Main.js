import React from "react";
import "./TravelCard";
import dataCard from "../data/data"
import TravelCard from "./TravelCard";

export default function Main() {
    const cardProps = dataCard.map(card => {
        return <TravelCard
            key = {card.id}
            {...card}
        />
    })

    return (
        <div className="main-content">
            {cardProps}
        </div>
    )
}