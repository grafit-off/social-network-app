import React from "react";
import styles from './css/Form.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = (props) => {
	const formik = useFormik({
		initialValues: {
			postMessage: ''
		},
		validationSchema: Yup.object({
			postMessage: Yup.string()
				.required('Это обязательное поле!')
		}),
		onSubmit: (values, { resetForm }) => {
			props.addPost(values.postMessage);
			resetForm();
		}
	})

	return (
		<form className={styles.form} onSubmit={formik.handleSubmit}>
			<label htmlFor="post-message " className='visually-hidden'>
				Введите текст поста
			</label>
			<div className={styles.textareaWrapper}>
				<textarea
					id="post-message"
					{...formik.getFieldProps('postMessage')}
					placeholder="Введите ваше сообщение"
					className={styles.textarea + ` input-reset ` + (
						formik.touched.postMessage && formik.errors.postMessage
							? styles.textareaError
							: null
					)} ></textarea>
				{formik.touched.postMessage && formik.errors.postMessage ? <div className={styles.error}>{formik.errors.postMessage}</div> : null}
			</div>
			<button
				className={`${styles.button} btn-reset`}
			>
				Отправить
			</button>
		</form>
	)
}

export default Form;