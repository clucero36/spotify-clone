import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { overrides } from './themes/themeIndex';
import NonAuthCallback from './routes/NonAuthCallback';
import NonAuthLanding from './routes/NonAuthLanding';
import Callback from './routes/Callback';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Context from './Context'
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
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
);


