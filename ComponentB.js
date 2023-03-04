// ComponentB.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ComponentB = () => {
  const { data, setData } = useContext(MyContext);

  const handleClick = () => {
    setData('New Data');
  };

  return (
    <>
      <h1>{data}</h1>
      <button onClick={handleClick}>Update Data</button>
    </>
  );
};

export default ComponentB;
