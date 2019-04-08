import React from 'react';

const Form = (props) => {
	const { name, email, message, handleChange, handleSubmit } = props;
	return (
		<div id="Form">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
				<input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
				<textarea
					rows="5"
					cols="50"
					placeholder="Message..."
					name="message"
					value={message}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
