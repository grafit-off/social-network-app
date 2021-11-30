import React from 'react';
import Input from '../Input/Input';
import styles from './css/Captcha.module.css';

const Captcha = (props) => {
	return (
		<div className={styles.captcha}>
			<Input name={props.name} label={"Введите капчу!"} type="text" placeholder="Капча" />
			<div className={styles.image}>
				<img className={styles.img} src={props.captcha} alt="Капча" />
			</div>
		</div>
	)
}

export default Captcha;