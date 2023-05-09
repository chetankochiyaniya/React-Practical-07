import React from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className='container'>
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute restricted={true} component={SignUp} />} />
        <Route path='/signup' element={<PublicRoute restricted={true} component={SignUp} />} />
        <Route path='/home' element={<PrivateRoute component={Home} />} />    
      </Routes>
    </div>    
    </div>
  );
};

export default App;