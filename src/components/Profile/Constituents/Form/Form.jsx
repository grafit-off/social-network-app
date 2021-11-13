import React from "react";
import styles from './css/Form.module.css'

const Form = () => {
	return (
		<form action="/" className={styles.form}>
			<label htmlFor="post-message " className='visually-hidden'>
				Введите текст поста
			</label>
			<textarea
				id="post-message"
				name="post-message"
				required
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`}></textarea>
			<button className={`${styles.button} btn-reset`}>Отправить</button>
		</form>
	)
}

export default Form;