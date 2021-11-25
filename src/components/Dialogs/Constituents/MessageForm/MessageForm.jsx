import React from "react";
import styles from './css/MessageForm.module.css';

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