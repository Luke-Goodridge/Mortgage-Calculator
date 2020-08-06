import React from 'react';

const dropdown = ({currentInterest,dropdownHandler,interestArray}) => {
    let id = 0;
    return(
        <select value={currentInterest} onChange={dropdownHandler}>
            {interestArray.map((option)=>
                <option key={id++} value={option}>{option}%</option>
            )}
        </select>
    );
}

export default dropdown;