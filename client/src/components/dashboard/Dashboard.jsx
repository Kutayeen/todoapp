import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { logoutUser, setLoggedIn } from "../../redux/actions/authActions";
import AddTodo from "../AddTodo.jsx";
import TodoList from "../TodoList.jsx";
import Axios from "axios";

const Dashboard = () => {
	const [todoList, setTodoList] = useState([]);
	const user = useSelector(state => state.auth.user);
	// const auth = useSelector(state => state.auth);
	// const dispatch = useDispatch();

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const res = await Axios.get(`/api/todos/${user.id}/todos`);
		setTodoList(res.data);
	};

	const addTodo = async item => {
		item.user = user.id;
		try {
			await Axios.post(`/api/todos/${user.id}/todos/add-todo`, item);
			loadData();
			return;
		} catch (err) {
			return err;
		}
	};

	const deleteTodo = async id => {
		try {
			await Axios.delete(`/api/todos/${user.id}/todos/delete/${id}`);
			loadData();
		} catch (err) {
			console.log(err);
		}
	};

	// console.log("auth in dashbaord comp. :", auth);

	return (
		<div className="dashboard">
			<h1>
				Hoş Geldiniz Sn. {user.name}{" "}
			</h1>
			<AddTodo addTodo={addTodo} />
			<TodoList list={todoList} deleteTodo={deleteTodo} />
		</div>
	);
};

export default Dashboard;
