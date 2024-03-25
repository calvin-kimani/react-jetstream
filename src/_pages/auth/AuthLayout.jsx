import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
	return (
		<div className="w-screen h-screen p-2 bg-gray-100 space-y-4 sm:p-0 flex flex-col">
			<img src="/public/images/jet-stream.webp" alt="React Jet Stream Logo" className="mx-auto rounded-full w-18 h-16 mt-16"/>
			<div className="m-auto w-fit">
				<Outlet />
			</div>
		</div>
	)
}

export default AuthLayout