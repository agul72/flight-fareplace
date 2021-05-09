import React, {useEffect, useState} from "react";
import { FlightList } from '../components/FlightList';
import { getFlights } from "../services/http.service";

export const FlightPage = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights()
            .then(fetchedFlights => setFlights(fetchedFlights));
    }, []);

    return (
            <div >
                <h3>Flight list</h3>
                <FlightList flights={flights}/>
            </div>
        )
}
