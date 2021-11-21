import React from "react";
import styles from './css/Form.module.css';

const Form = (props) => {
	let textarea = React.createRef();
	let onAddPost = () => {
		props.addPost();
	}
	let updatePostArea = () => {
		props.updatePostArea(textarea.current.value);
	}

	return (
		<form className={styles.form}>
			<label htmlFor="post-message " className='visually-hidden'>
				Введите текст поста
			</label>
			<textarea
				ref={textarea}
				id="post-message"
				name="post-message"
				onChange={updatePostArea}
				value={props.newPostText}
				required
				placeholder="Введите ваше сообщение"
				className={`${styles.textarea} input-reset`} ></textarea>
			<button
				className={`${styles.button} btn-reset`}
				onClick={onAddPost} >
				Отправить
			</button>
		</form>
	)
}

export default Form;