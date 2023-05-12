import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { overrides } from './themes/themeIndex';
import App from './App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Callback from './routes/Callback';
import Context from './Context'
import NonAuthLanding from './routes/NonAuthLanding';
import NonAuthCallback from './routes/NonAuthCallback';

ReactDOM.render(
  <ChakraProvider theme={overrides}>
    <Context>
      <ColorModeScript initialColorMode={overrides.config.initialColorMode}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/*' element={<Landing />} />
          <Route path='/callback' element={<Callback />} />
          <Route path='/spotify/*' element={<NonAuthLanding />} />
          <Route path='/non-auth-callback/*' element={<NonAuthCallback />} />
        </Routes>
      </BrowserRouter>
    </Context>
  </ChakraProvider>,

  document.getElementById('root')
);

