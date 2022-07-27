import React, { useState } from 'react';

const UserContext = React.createContext();

function UserContextProvider(props) {

  // State data for each beat.

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');

  const ansArr = [
    [answer1, setAnswer1],
    [answer2, setAnswer2]
  ];

  return (
    <UserContext.Provider value={{
      ansArr
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }