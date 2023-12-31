import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import Add from "./components/Add";
import Nav from "./components/Nav";
import User from "./components/User";
import Catch from "./components/Catch";
import Protected from "./components/middleware/Protected";
import CounterProtected from "./components/middleware/CounterProtected";
import ResetProtected from "./components/middleware/ResetProtected";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import "./App.scss";

function App() {
	return (
		<AuthProvider>
			<Nav />

			<Routes>
				<Route path="/" element={<Protected />}>
					<Route path="/" element={<Home />} />
				</Route>

				<Route path="/u/:uid" element={<User />} />

				<Route path="/add" element={<Add />} />

                <Route path="/c/:cid" element={<Catch />} />

                <Route path='/signin' element={<CounterProtected />}>
                    <Route path="/signin" element={<Signin />} />
                </Route>
                <Route path='/signup' element={<CounterProtected />}>
                    <Route path="/signup" element={<Signup />} />
                </Route>
                
                <Route path='/forgot' element={<CounterProtected />}>
                    <Route path="/forgot" element={<ForgotPassword />} />
                </Route>

                {/* NOTE: you should not be able to reach this without having visited the reset pw link */}
                <Route path="/resetpassword" element={<ResetProtected />}>
					<Route path="/resetpassword" element={<ResetPassword />} />
				</Route>

				<Route path="*" element={<Protected />}>
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
