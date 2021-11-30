import React from "react";
import styles from './css/MessageForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MessageForm = (props) => {
	const formik = useFormik({
		initialValues: {
			message: ''
		},
		validationSchema: Yup.object({
			message: Yup.string()
				.required('Это поле не может быть пустым!')
		}),
		onSubmit: (values) => {
			props.addMessage(values.message);
			formik.resetForm();
		}
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="dialog-message" className='visually-hidden'>
				Введите текст поста
			</label>
			<div className={styles.textareaWrapper}>
				<textarea
					{...formik.getFieldProps('message')}
					id="dialog-message"
					placeholder="Введите ваше сообщение"
					className={styles.textarea + ` input-reset ` +
						(formik.touched.message && formik.errors.message
							? styles.textareaError :
							null)}
				></textarea>
				{formik.touched.message && formik.errors.message
					? <div className={styles.error}>{formik.errors.message}</div>
					: null}
			</div>
			<button
				type='submit'
				className={`${styles.button} btn-reset`}
			>
				Отправить
			</button>
		</form>
	)

};

export default MessageForm;


/*

const MessageForm = (props) => {
	const textarea = React.createRef();

	const addMessage = () => props.addMessage();

	const updataMessageAreaText = () => props.updataMessageAreaText(textarea.current.value);
	return (
		<form className={styles.form} >
			<label htmlFor="dialog-message" className='visually-hidden'>
				Введите текст поста
			</label>
			<textarea
				ref={textarea}
				id="dialog-message"
				name="dialog-message"
				required
				onChange={updataMessageAreaText}
				value={props.newMessageText}
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`}></textarea>
			<button
				type='button'
				className={`${styles.button} btn-reset`}
				onClick={addMessage} >
				Отправить
			</button>
		</form>
	)
};

export default MessageForm;

*/