import React from 'react';
import LoginForm from './Constituents/LoginForm/loginForm';
import styles from './css/Login.module.css';

const Login = (props) => {
	return (
		<section className={styles.section}>
			<h1 className={styles.heading + ' text-reset'}>Вход</h1>
			<LoginForm login={props.login} captcha={props.captcha} />
		</section>
	)
}
export default Login;