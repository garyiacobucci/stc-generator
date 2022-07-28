import React, { useContext, useState } from 'react';
import { beats } from '../staticData';
import { UserContext } from '../UserContext';

const Treatment = (props) => {

  //Connect to UserContext via Context API:
  const { 
    ansArr,
    updateAnsArr } = useContext(UserContext); 

  return (
    <div key="1">
      <h1>TREATMENT</h1>
      <p>We open on: {ansArr[0]}</p>
      <p>Over the course of the first ten minutes: {ansArr[1]}</p>
      <p>We get a taste of the theme when: {ansArr[2]}</p>
      <p>Then, something happens to catalyze a big change. {ansArr[3]}</p>
      <p>The way forward isn't totally certain. {ansArr[4]}</p>
      <p>A choice has to be made. {ansArr[5]}</p>
      <p>While all this is going down, a new wrinkle comes into focus. {ansArr[6]}</p>
      <p>Now we get into the fun stuff. {ansArr[7]}</p>
      <p>{ansArr[8]}</p>
      <p>The iron glove of fate begins to tighten. {ansArr[9]}</p>
      <p>{ansArr[10]} All seems lost.</p>
      <p>Things have never felt so hopeless. {ansArr[11]}</p>
      <p>But then, there's a ray of light. {ansArr[12]}</p>
      <p>Now we're diving headlong into the finale. {ansArr[13]}</p>
      <p>As we wrap up: {ansArr[14]}</p>
    </div>
  )
}

export default Treatment;