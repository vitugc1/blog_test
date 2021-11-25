import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import { Routes } from './Routes/Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}





