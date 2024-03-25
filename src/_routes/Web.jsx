import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Welcome from '/src/_pages/Welcome';
import Login from '/src/_pages/auth/Login';
import Register from '/src/_pages/auth/Register';
import ForgotPassword from '/src/_pages/auth/ForgotPassword';
import ConfirmPassword from '/src/_pages/auth/ConfirmPassword';
import AuthLayout from '/src/_pages/auth/AuthLayout';

const web = () => {
	return (
		<Routes>
			<Route path="/" element={<Welcome />} />
			<Route path="/auth" element={<AuthLayout />}>
				<Route path="login" element={<Login />}/>
				<Route path="register" element={<Register />}/>
				<Route path="forgot-password" element={<ForgotPassword />}/>
				<Route path="confirm-password" element={<ConfirmPassword />}/>
			</Route>
		</Routes>
	)
}

export default web