
import React from 'react';

const Dropdown = (value,array,handler) => {
    let index = 0;
    return (
        <select value={value} onChange={handler}>
        {array.map((option)=>
            <option key={index++} value={option}>{option}</option>
        )}
        </select>
    );
}

export default Dropdown;