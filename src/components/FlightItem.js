import React from "react";
import s from "./flight.module.css"

export const FlightItem = ({ flight }) => {
    return (
        <div className={s.card}>
            <img src={flight.imageUrl} alt={"Empty"}/>
            <div className={s.route}>
                { flight.inboundId } - { flight.outboundId }
            </div>
            <div>
                { flight.viewersCount } viewing this
            </div>
            <button>
                Now from {flight.currencySymbol} { flight.currentMinPrice }
            </button>
        </div>
    )
}
