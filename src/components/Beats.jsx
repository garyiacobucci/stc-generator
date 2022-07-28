import React, { useContext, useState } from 'react';
import { beats, examples } from '../staticData';
import { UserContext } from '../UserContext';

const Beats = (props) => {

  //Connect to UserContext via Context API:
  const { 
    ansArr,
    updateAnsArr } = useContext(UserContext); 

  //Define function for updating controlled form input:
  function handleChange(e, hookName, i = null) {
    const {value} = e.target;
    if (hookName === updateAnsArr) {
      updateAnsArr(value, i)
    } else hookName(value);
  }

  return (
    <div key="1">
      <h1>ACT I</h1>
        {beats.map((beat, i) => (
          <div key={i}>
            <p>{i+1}. {beat.name} (~Page {beat.page})</p>
            <p>{beat.desc}</p>
            <p>Example: {examples[0][i]}</p>
            <form>
              <input
                type="text"
                placeholder="Type your answer here"
                onChange={(e) => handleChange(e, updateAnsArr, i)}
                name="answerText"
                value={ansArr[i]}
              />
            </form>
          </div>
        ))}
    </div>
  )
}

export default Beats;