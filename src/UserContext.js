import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserContextProvider(props) {

  // State data for each beat in an answer array.
  const [ansArr, setAnsArr] = useState([[],[]])

  const updateAnsArr = (value, i) => {
    const updatedAnsArr = [...ansArr];
    updatedAnsArr[i] = value;
    setAnsArr(updatedAnsArr);
  }

  // Check localStorage for ansArr.
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('ansArr'));
    if (response) {
      setAnsArr(response)
      console.log(ansArr)
    }   
  }, [])

  useEffect(() => {
    localStorage.setItem('ansArr', JSON.stringify(ansArr));
    console.log('Setting ansArr', ansArr)
  }, [ansArr]);


  return (
    <UserContext.Provider value={{
      ansArr, updateAnsArr
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }