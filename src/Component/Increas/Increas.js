import React from 'react';
import Last from '../Last/Last';

const Increas = (props) => {
    return (
        <div>
            <p>Sub-2 :-{props.name}</p>
            <Last last={props.name}></Last>
        </div>
    );
};

export default Increas;