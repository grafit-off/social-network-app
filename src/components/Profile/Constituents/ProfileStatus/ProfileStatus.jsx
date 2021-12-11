import React, { useEffect, useState } from 'react';
import styles from './css/ProfileStatus.module.css';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);
	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
	}

	const sendStatus = () => {
		deActivateEditMode();
		if (props.status !== status) {
			props.updateStatusThunk(status);
		}
	}

	const onInput = (e) => {
		setStatus(e.target.value);
	}

	return (
		<div className={styles.status}>
			{!editMode
				? <div className={styles.statusContainer}>
					<p className={styles.text + " text-reset"}>{props.status ? props.status : ''} </p>
					<button className={styles.button + " btn-reset"} onClick={activateEditMode}>(Изменить)</button>
				</div>
				: <label className={styles.inputContainer}>
					<span className={styles.label}> Введите ваш статус:</span>
					<input type="text" className={styles.input + ' input-reset'} onChange={onInput} value={status ? status : ''} />
					<div className={styles.buttons}>
						<button className={styles.button + " btn-reset"} onClick={sendStatus}>Сохранить</button>
						<button className={styles.button + " btn-reset"} onClick={deActivateEditMode}>Отменить</button>
					</div>
				</label>
			}
		</div>
	)
}

export default ProfileStatus;