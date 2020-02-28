import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function LocationsList() {
    const [location, setLocation] = useState([]);
  useEffect(()=>{
    const getLocation = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(resp => {
          console.log(resp.data.results);
          setLocation(resp.data.results)
        })
        .catch(err=>{
          console.log('location card', err)
        })
    }
    getLocation();
  }, [])
  return (
    <section className='LocationCard'>
      <h2>Locations</h2>
      {location.map(loc => {
          return (
              <LocationDetails key={loc.id} location={loc} />
          )
      })}
    </section>
  );
}

const LocationDetails = ({location}) => {
    const {name, type, dimension, residents} = location;
    console.log(location);

    return(
        <Link to={`/location/`} style={{ textDecoration: 'none' }}>
            <section>
                <h1>Name: {name}</h1>
                <h4>Type: {type}</h4>
                <h4>Dimension: {dimension}</h4>
                {/* <h4>Residents: {residents}</h4> */}
            </section>
        </Link>
    )
}

