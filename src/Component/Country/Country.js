import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,name} = props.country;
    return (
        <div className='country'>
            <h4>Area: {area}</h4>
            <p>County: {name.common}</p>
        </div>
    );
};

export default Country;