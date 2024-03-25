import React from 'react'

const ButtonSubmit = (attr) => {
	return (
		<button
			type="submit"
			className="font-bold text-white px-3 py-2 rounded-lg bg-black"
		>
			{attr.value ?? 'Submit'}
		</button>
	)
}

export default ButtonSubmit