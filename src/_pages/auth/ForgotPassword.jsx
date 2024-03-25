import React from 'react'
import Label from '/src/_components/input/Label';

import Input from '/src/_components/input/Input';
import InputCheckbox from '/src/_components/input/InputCheckbox';
import ButtonSubmit from '/src/_components/buttons/ButtonSubmit';

const ForgotPassword = () => {
	return (
		<form className="w-full sm:w-[400px] border shadow-2xl p-4 bg-white flex flex-col gap-4 rounded-lg" method="POST">
			<div className="space-y-2">
				<Label for="email" value="Email"/>
				<Input id="email" type="email" name="email" placeholder="enter your email"/>
			</div>
			<div className="flex justify-end">
				<ButtonSubmit value="Reset Password"/>
			</div>			
		</form>
	)
}

export default ForgotPassword