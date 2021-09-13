import React from 'react';

const Form = ({ value, handleChange, handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				className="emailInput"
				type="email" placeholder="Email"
				value={value}
				onChange={handleChange}
			/>
			<input
				className="emailButton" 
				type="submit"
				value="SUBMIT"
			/>
		</form>
	);
};

export default Form;