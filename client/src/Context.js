import React, { createContext, useState } from 'react';

export const TokenContext = createContext();

const Context = ({ children }) => {

  const [accessToken, setAccessToken] = useState([]);
  const [tokenType, setTokenType] = useState([])

  return (
    <TokenContext.Provider value={{value: [accessToken, setAccessToken], value2: [tokenType, setTokenType]}}>
      {children}
    </TokenContext.Provider>
  )
}

export default Context;