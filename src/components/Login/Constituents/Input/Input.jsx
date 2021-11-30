import React from 'react';
import styles from './css/Input.module.css';
import { useField } from 'formik';

const Input = ({ label, handleFocus, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<label className={styles.field}>
			<span className={styles.text}>{label}</span>
			<input onFocus={handleFocus} className={styles.input + " input-reset " +
				(meta.touched && meta.error
					? styles.inputError
					: '')
			}

				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? <span className={styles.error}> {meta.error} </span> : null}
		</label>
	)
}
export default Input;