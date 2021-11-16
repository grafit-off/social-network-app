import React from "react";
import styles from './css/MessageForm.module.css';
import { addMessageActionCreater, updataMessageAreaTextActionCreator } from '../../../../Redux/reducers/messages-reducer';

const MessageForm = (props) => {
	const textarea = React.createRef();

	const sendMessage = () => props.dispatch(addMessageActionCreater());

	const onTextareaChange = () => {
		props.dispatch(updataMessageAreaTextActionCreator(textarea.current.value));
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