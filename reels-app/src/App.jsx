import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home'
import Nav from './components/Nav'
import User from './components/User';
import Catch from './components/Catch';
import Protected from './components/Protected';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';

import './App.scss'

function App() {
	const [a, setA] = useState(5);
	
	return (
		<AuthProvider>
		<Nav />
		<div className='content-container'>
			<Routes>
			<Route path='/' element={ <Home/> } />
			
			<Route path='/u/:uid' element={ <User/> } />
			
			<Route path='/catch' element={ <Catch/> } />

			<Route path='/signin' element={ <SignIn/> } />
			<Route path='/signup' element={ <SignUp/> } />

			<Route path='*' element={<Protected />} >
				<Route path='*' element={ <Home/> } />
			</Route>
			</Routes>
		</div>
		</AuthProvider>
	);
};

export default App;