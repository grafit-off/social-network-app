import React from 'react';
import styles from './css/Checkbox.module.css';
import { useField } from 'formik';

const Checkbox = ({ label, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	return (
		<label className={styles.checkbox}>
			<input className={styles.checkboxInput + ' visually-hidden'}
				type="checkbox"
				{...field} {...props} />
			<span className={styles.checkboxBox}></span>
			<span className={styles.checkboxText}>{label}</span>
		</label>
	)
}
export default Checkbox;