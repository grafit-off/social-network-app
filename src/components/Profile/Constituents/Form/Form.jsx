import React from "react";
import styles from './css/Form.module.css';
import { addPostActionCreater, updatePostAreaActionCreater } from '../../../../Redux/store';

const Form = (props) => {
	let textarea = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreater());
	};

	let onTextareaChange = () => {
		props.dispatch(updatePostAreaActionCreater(textarea.current.value));
	};

	return (
		<form className={styles.form}>
			<label htmlFor="post-message " className='visually-hidden'>
				Введите текст поста
			</label>
			<textarea
				ref={textarea}
				id="post-message"
				name="post-message"
				onChange={onTextareaChange}
				value={props.newPostText}
				required
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`} ></textarea>
			<button
				type="button"
				className={`${styles.button} btn-reset`}
				onClick={addPost} >
				Отправить
			</button>
		</form>
	)
}

export default Form;