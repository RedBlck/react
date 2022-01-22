import React, {useEffect, useState} from 'react';
import Flight from "../Flight/Flight";
import './Flights.css';

const Flights = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value.filter(item => item.launch_year != 2020)));
    }, []);
    return (
        <div>
            {flights.map(value => <Flight name={value.mission_name} year={value.launch_year} img={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Flights;