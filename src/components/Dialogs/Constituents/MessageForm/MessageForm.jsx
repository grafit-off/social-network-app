import React from "react";
import styles from './css/MessageForm.module.css';

const MessageForm = (props) => {
	const textarea = React.createRef();

	const sendMessage = () => props.sendMessage();

	const onTextareaChange = () => props.onTextareaChange(textarea.current.value);
	return (
		<form className={styles.form}>
			<label htmlFor="dialog-message" className='visually-hidden'>
				Введите текст поста
			</label>
			<textarea
				ref={textarea}
				id="dialog-message"
				name="dialog-message"
				required
				onChange={onTextareaChange}
				value={props.newMessageText}
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`}></textarea>
			<button
				className={`${styles.button} btn-reset`}
				onClick={sendMessage} >
				Отправить
			</button>
		</form>
	)
};

export default MessageForm;