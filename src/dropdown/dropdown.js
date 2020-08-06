import React from 'react';
const dropdown = ({currentInterest,dropdownHandler,interestArray}) => {
    console.log("current interest is:" ,currentInterest);
    return(
        <select value={currentInterest} onChange={dropdownHandler}>
            {interestArray.map((option)=>
                <option value={option}>{option}%</option>
            )}
        </select>
    );
}

export default dropdown;