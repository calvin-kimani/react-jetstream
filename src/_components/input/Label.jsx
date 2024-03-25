import React from 'react'

const Label = (attr) => {
	return (
		<label
		htmlFor={attr.for}
		className="block text-sm font-semibold"
		>
		{attr.value}
		</label>
	)
}

export default Label