import React from 'react'

const InputCheckbox = (attr) => {
	return (
		<input type="checkbox"
			name={attr.name}
			id={attr.id}
		/>
	)
}

export default InputCheckbox