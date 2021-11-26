import React from 'react';
import styles from './css/ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}

	deActivateEditMode = () => {
		this.setState({ editMode: false })
	}

	render() {
		return (
			<div className={styles.status}>
				{!this.state.editMode
					? <div className={styles.statusContainer}>
						<p className={styles.text + " text-reset"}>{this.state.status ? this.state.status : ''} </p>
						<button onClick={this.activateEditMode} className={styles.button + " btn-reset"}>(Изменить)</button>
					</div>
					: <label className={styles.inputContainer}>
						<span className={styles.label}> Введите ваш статус:</span>
						<input type="text" value={this.state.status ? this.state.status : ''} className={styles.input + ' input-reset'} />
						<button onClick={this.deActivateEditMode} className={styles.button + " btn-reset"}>Сохранить</button>
					</label>
				}
			</div>
		)
	}
}

export default ProfileStatus;