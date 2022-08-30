import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { overrides } from './themes/themeIndex';
import App from './App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Callback from './routes/Callback';

ReactDOM.render(
  <ChakraProvider theme={overrides}>
    <ColorModeScript initialColorMode={overrides.config.initialColorMode}/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/*' element={<Landing />} />
        <Route path='/callback' element={<Callback />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById('root')
);

