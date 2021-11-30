import React from 'react';
import styles from './css/LoginForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Captcha from '../Captcha/Captcha';
import Checkbox from '../Checkbox/Checkbox';

const validation = () => {
	return Yup.object({
		email: Yup.string()
			.email('Невалидный адресс электронной почты!')
			.required('Обязательное поле!'),
		password: Yup.string()
			.min(5, 'Должен состоять с пяти и больше символов!')
			.required('Обязательное поле!')
	})
}

const validationCap = () => {
	return Yup.object({
		email: Yup.string()
			.email('Невалидный адресс электронной почты!')
			.required('Обязательное поле!'),
		password: Yup.string()
			.min(5, 'Должен состоять с пяти и больше символов!')
			.required('Обязательное поле!'),
		captcha: Yup.string()
			.required('Обязательное поле!')
	})
}

const LoginForm = (props) => {
	let currentStatus = null;

	const setCurrentStatus = (status) => {
		currentStatus = status;
		return null
	}

	return (
		<Formik
			initialValues={{ email: '', password: '', captcha: '', rememberMe: false }}
			validationSchema={props.captcha ? validationCap() : validation()}
			onSubmit={async (values, actions) => {
				if (currentStatus === null) {
					await props.login(values, actions.setStatus);
					if (currentStatus || props.captcha) {
						actions.resetForm();
					}
				}
			}}
		>
			{formik => {
				return (
					<Form className={styles.form}>
						<fieldset className={styles.fieldset}>
							<legend className={styles.legend}>Введите ваши данные</legend>
							<Input label="Ваша электронная почта:" handleFocus={() => { formik.setStatus(null); }} name="email" type="email" placeholder="Эл. почта" />
							<Input label="Ваш пароль:" name="password" handleFocus={() => { formik.setStatus(null); }} type="password" placeholder="Пароль" />
							{formik.status ? <div className={styles.error}>{formik.status}</div> : null}
							{formik.status ? setCurrentStatus(formik.status) : setCurrentStatus(null)}
							{props.captcha ? <Captcha name="captcha" captcha={props.captcha} /> : null}
							<Checkbox label="Запомнить меня" name="rememberMe" />
						</fieldset>
						<button type="submit" className={styles.submit + " btn-reset"}>Войти</button>
					</Form>
				)
			}}
		</Formik >
	)
}
export default LoginForm;