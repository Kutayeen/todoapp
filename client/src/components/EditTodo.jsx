import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";

const EditTodo = ({ match: { params }, history }) => {
	const user = useSelector(state => state.auth.user);
	const [value, setValue] = useState("");
	const [valueDesc, setValueDesc] = useState("");
	const [errors, setErrors] = useState({});

	useEffect(() => {
		getTodo();
	}, []);

	const getTodo = async () => {
		const res = await Axios.get(`/api/todos/${user.id}/todos/${params.id}`);
		setValue(res.data.name);
		setValueDesc(res.data.desc);
	};

	const updateTodo = async data => {
		try {
			const res = await Axios.patch(
				`/api/todos/${user.id}/todos/edit/${params.id}`,
				data
			);
			history.push("/dashboard");
		} catch (err) {
			setErrors(err.response.data);
		}
	};

	const handleChange = async e => {
		await setValue(e.target.value);
	};

	const handleChange2 = async e => {
		await setValueDesc(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			name: value,
			desc: valueDesc
		};
		updateTodo(data);
	};

	return (
		<div className="form-container">
			<h1>Düzenle</h1>
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
				<button>Düzenle</button>
			</form>
		</div>
	);
};

export default EditTodo;
