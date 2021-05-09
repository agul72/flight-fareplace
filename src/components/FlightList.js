import React from "react";
import s from "./flight.module.css"
import {FlightItem} from "./FlightItem";

export const FlightList = ({flights}) => {

    const getFlight = (flight) => (
        <FlightItem
            flight={flight}
            key={flight.id}
        />
    );

    if (!flights.length) {
        return (
            <p>There are no any flights</p>
        )
    }
    return (
        <div className={s.container}>
            {flights.map((flight) => getFlight(flight))}
        </div>
    )
}
