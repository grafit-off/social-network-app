import React from 'react';
import styles from './css/ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			status: this.props.status
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}

	deActivateEditMode = () => {
		this.setState({ editMode: false })
	}

	sendStatus = () => {
		this.deActivateEditMode();
		if (this.props.status !== this.state.status) {
			this.props.updateStatusThunk(this.state.status);
		}
	}

	onInput = (e) => {
		this.setState({ status: e.target.value });
	}

	render() {
		return (
			<div className={styles.status}>
				{!this.state.editMode
					? <div className={styles.statusContainer}>
						<p className={styles.text + " text-reset"}>{this.props.status ? this.props.status : ''} </p>
						<button onClick={this.activateEditMode} className={styles.button + " btn-reset"}>(Изменить)</button>
					</div>
					: <label className={styles.inputContainer}>
						<span className={styles.label}> Введите ваш статус:</span>
						<input type="text" onChange={(e) => {
							this.onInput(e);
						}} value={this.state.status} className={styles.input + ' input-reset'} />
						<div className={styles.buttons}>
							<button onClick={this.sendStatus} className={styles.button + " btn-reset"}>Сохранить</button>
							<button onClick={this.deActivateEditMode} className={styles.button + " btn-reset"}>Отменить</button>
						</div>
					</label>
				}
			</div>
		)
	}
}

export default ProfileStatus;