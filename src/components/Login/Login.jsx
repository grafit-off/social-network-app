import React from 'react';
import LoginForm from './Constituents/LoginForm/LoginForm';
import styles from './css/Login.module.css';

const Login = ({ login, captcha }) => {
	return (
		<section className={styles.section}>
			<h1 className={styles.heading + ' text-reset'}>Вход</h1>
			<LoginForm login={login} captcha={captcha} />
		</section>
	)
}
export default Login;