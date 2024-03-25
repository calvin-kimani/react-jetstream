import React from 'react'
import Label from '/src/_components/input/Label';

import Input from '/src/_components/input/Input';
import InputCheckbox from '/src/_components/input/InputCheckbox';
import ButtonSubmit from '/src/_components/buttons/ButtonSubmit';

import { ErrorBox, SuccessBox, InfoBox } from '/src/_components/Messages';

const Login = () => {
	return (
		<form className="min-w-full sm:w-[400px] border shadow-2xl p-4 bg-white flex flex-col gap-4 rounded-lg" method="POST">
			<div className="space-y-2">
				<Label for="email" value="Email"/>
				<Input id="email" type="email" name="email" />
			</div>
			<div className="space-y-2">
				<Label for="password" value="Password"/>
				<Input id="password" type="password" name="password" />
			</div>
			<div className="space-x-2">
				<InputCheckbox id="remember_me" name="remember_me" />
				<span>Remember Me</span>			
			</div>
			<div className="flex gap-4 items-center justify-end ">
				<a href="/auth/forgot-password" className="underline font-semibold text-gray-600">Forgot Password?</a>
				<ButtonSubmit value="Login"/>
			</div>			
		</form>
	)
}

export default Login