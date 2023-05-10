import React from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='container'>
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute restricted={true} component={SignUp} />} />
        <Route path='/signup' element={<PublicRoute restricted={true} component={SignUp} />} />
        <Route path='/home' element={<PrivateRoute component={Home} />} />
        <Route path='/*' element={<PublicRoute restricted={false} component={PageNotFound} />} />    
      </Routes>
    </div>    
    </div>
  );
};

export default App;