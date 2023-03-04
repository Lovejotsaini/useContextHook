// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ComponentA = () => {
  const { data } = useContext(MyContext);

  return <h1>{data}</h1>;
};

export default ComponentA;
