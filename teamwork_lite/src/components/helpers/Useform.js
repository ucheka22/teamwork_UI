import React, { useState } from 'react';

const useForm = (initialValues) => {
	const [ values, setValues ] = useState(initialValues);
	const handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setValues({
			...values,
			[name]: value
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setValues({
			...values,
			...initialValues
		});
	};
	return {
		values,
		handleChange,
		handleSubmit
	};
};

export default useForm;
