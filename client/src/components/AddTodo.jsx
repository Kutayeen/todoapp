import React, { useState, useEffect } from "react";

const AddTodo = ({ addTodo }) => {
	const [value, setValue] = useState("");
	const [valueDesc, setValueDesc] = useState("");
	const [errors, setErrors] = useState({});

	const handleChange = async e => {
		await setValue(e.target.value);		
	};

	const handleChange2 = async e => {
		await setValueDesc(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let data = {
			name: value,
			desc: valueDesc
		};
		let errors = addTodo(data);
		// console.log(errors);
		errors.then(data => {
			if (data) {
				setErrors(data.response.data);
			} else {
				setErrors({});
			}
		});
		setValue("");
		setValueDesc("");
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleChange}
					value={value}
					name="name"
					placeholder="Başlık..."
					id="name"
				/>
				<input
					type="text"
					onChange={handleChange2}
					value={valueDesc}
					name="desc"
					placeholder="Not..."
					id="desc"
				/>
				<p className="input-error">{errors.name}</p>
				<button>Ekle</button>
			</form>
		</div>
	);
};

export default AddTodo;
