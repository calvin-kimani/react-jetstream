import React from 'react'
import Label from '/src/_components/input/Label';

import Input from '/src/_components/input/Input';
import InputCheckbox from '/src/_components/input/InputCheckbox';
import ButtonSubmit from '/src/_components/buttons/ButtonSubmit';


const Register = () => {
	return (
		<form className="w-full sm:w-[400px] border shadow-2xl p-4 bg-white flex flex-col gap-4 rounded-lg" method="POST">
			<div className="space-y-2">
				<Label for="email" value="Email"/>
				<Input id="email" type="email" name="email" />
			</div>
			<div className="space-y-2">
				<Label for="password" value="Password"/>
				<Input id="password" type="password" name="password" />
			</div>
			<div className="space-y-2">
				<Label for="confirm_password" value="Confirm Password"/>
				<Input id="confirm_password" type="password" name="confirm_password" />
			</div>
			<div className="flex gap-4 items-center justify-end ">
				<a href="/auth/login" className="underline font-semibold text-gray-600">Already Registered?</a>
				<ButtonSubmit value="Register"/>
			</div>			
		</form>
	)
}

export default Register