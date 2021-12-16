import { getUserDataThunk } from './auth-reducer';

// Action Types
const INITIALIZE_SUCCES = 'social-network/app-reducer/INITIALIZE_SUCCES';
// -- //

const initialState = {
	isInitialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE_SUCCES: {
			return {
				...state,
				isInitialized: true
			}
		}

		default:
			return state;
	}
};

// Actions Creators
export const setInitialize = () => ({ type: INITIALIZE_SUCCES });
// -- //

// Thunks Creators
export const initializeThunk = () => (dispatch) => {
	const dispatchPromises = [dispatch(getUserDataThunk())];
	Promise.all(dispatchPromises)
		.then(() => {
			dispatch(setInitialize());
		})
}
// -- //

export default appReducer;