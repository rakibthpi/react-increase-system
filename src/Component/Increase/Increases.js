import React, { useEffect, useState } from 'react';
import Increas from '../Increas/Increas';
import './Increases.css';

const Increases = () => {
    const [increase, setIncrease] = useState(0);
    const increases = () => setIncrease(increase + 1);
    useEffect(() => {
        console.log(increase);
    },[increase])
    return (
        <div>
            <h1>Increase Number</h1>
            <p>Number: {increase}</p>
            <button onClick={increases}>Increase +</button>
            <Increas name={increase}></Increas>
        </div>
    );
};

export default Increases;