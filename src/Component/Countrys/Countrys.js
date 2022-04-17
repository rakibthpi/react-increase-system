import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countrys.css';

const Countrys = (props) => {
    const [countrys, setCountruys] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountruys(data))
    },[])
    return (
        <div>
            <h1>Hello Template</h1>
            <div className='rakib'>
                {
                    countrys.map(country => <Country 
                        country={country}
                        key = {country.cca3}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;