import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../../redux/actions/authActions.js";
const Landing = ({ history }) => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuthenticated);
	useEffect(() => {
		if (isAuth) {
			history.push("/dashboard");
			dispatch(setLoggedIn(true));
		}
	}, []);

	return (
		<div className="landing">
			<h1>Mikroservisler Final Projesi - Grup 15</h1>
			<p>TO DO APP</p>
			<div className="links">
				<Link to="/register">Kayıt Ol</Link>
				<Link to="/login">Giriş Yap</Link>
			</div>
		</div>
	);
};

export default Landing;
