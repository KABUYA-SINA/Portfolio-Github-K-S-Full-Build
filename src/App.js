import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Error from './page/Error';
import Home from './page/Home';

function App() {
  return (
      <BrowserRouter >
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='*' element={ <Error /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
