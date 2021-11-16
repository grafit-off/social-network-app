import React from "react";
import styles from './css/MessageForm.module.css';

const MessageForm = (props) => {

	let textarea = React.createRef();

	let sendMessage = () => {
		props.dispatch({ type: 'ADD-MESSAGE' });
	}

	let onTextareaChange = () => {
		props.dispatch({ type: 'UPDATE-MESSAGE-AREA-TEXT', newText: textarea.current.value });
	}

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
				value={props.newMassageText}
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`}></textarea>
			<button
				type="button"
				className={`${styles.button} btn-reset`}
				onClick={sendMessage} >
				Отправить
			</button>
		</form>
	)
};

export default MessageForm;