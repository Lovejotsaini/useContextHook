// MyProvider.js
import React from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [data, setData] = React.useState('Hello World!');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
