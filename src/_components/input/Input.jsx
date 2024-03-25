import React from 'react'

const Input = (attr) => {
	return (
		<input type={attr.type} 
			className="border p-2 rounded-lg w-full"
			name={attr.name}
			id={attr.id}
			placeholder={attr.placeholder}
			required
		/>
	)
}

export default Input