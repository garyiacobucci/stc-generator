import React, { useContext, useState } from 'react';
import { beats } from '../staticData';
import { UserContext } from '../UserContext';

const Act1 = (props) => {

  //Define function for updating controlled form input:
  function handleChange(event, hookName) {
    const {value} = event.target;
    hookName(value);
  }

  

  //Connect to UserContext via Context API:
  const { 
    ansArr } = useContext(UserContext); 

  return (
    <div key="1">
      <h1>ACT I</h1>
        {beats.map((beat, i) => (
          <div key={i}>
            <p>{beat.num}. {beat.name} (Page {beat.page})</p>
            <p>{beat.desc}</p>
            <form>
              <input
                type="text"
                placeholder="Type your answer here"
                onChange={((e) => handleChange(e, ansArr[i][1]))}
                name="answerText"
                value={ansArr[i][0]}
              />
            </form>
          </div>
        ))}
    </div>
  )
}

export default Act1;