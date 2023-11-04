import React, { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext';
import Nav from './components/Nav'
import Protected from './components/Protected';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Nav />

      <Router>
        <Route path='/' element={ Home } />
        <Route path='*' element={ Protected } />
      </Router>
    </AuthProvider>
  );
}

export default App
