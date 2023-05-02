import React, { useState } from 'react'
import { Dashboard, Login } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
 
  const handleLogin = (username, password) => {
    // Perform authentication logic here
    // ...
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };


  return (
    <>
      {isLoggedIn ? (
        (
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
                <Navigate to='/' />
            </Router>
          )
      ) : (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
            <Navigate to='/login' />
        </Router>
      )}
    </>
  )
}

export default App