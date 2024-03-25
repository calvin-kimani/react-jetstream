import React from 'react'
import Label from '/src/_components/input/Label';

import Input from '/src/_components/input/Input';
import InputCheckbox from '/src/_components/input/InputCheckbox';
import ButtonSubmit from '/src/_components/buttons/ButtonSubmit';


const Register = () => {
	return (
		<form className="w-full sm:w-[400px] border shadow-2xl p-4 bg-white flex flex-col gap-4 rounded-lg" method="POST">
			<p>This is a secure area of the application. Please confirm your password before continuing.</p>
			<div className="space-y-2">
				<Label for="password" value="Password"/>
				<Input id="password" type="password" name="password" />
			</div>
			<div className="flex gap-4 items-center justify-end uppercase">
				<ButtonSubmit value="Confirm"/>
			</div>			
		</form>
	)
}

export default Register