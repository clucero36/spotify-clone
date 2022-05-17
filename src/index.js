import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { overrides } from './themes/themeIndex';
import App from './App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Redirect from './routes/Redirect';

ReactDOM.render(
  <ChakraProvider theme={overrides}>
    <ColorModeScript initialColorMode={overrides.config.initialColorMode}/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById('root')
);

