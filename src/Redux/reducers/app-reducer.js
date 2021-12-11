import { authAPI } from "../../api/api";
import { getUserDataThunk } from './auth-reducer';

const INITIALIZE_SUCCES = 'INITIALIZE_SUCCES';


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


export const setInitialize = () => ({ type: INITIALIZE_SUCCES });

export const initializeThunk = () => (dispatch) => {
	const dispatchPromises = [dispatch(getUserDataThunk())];
	// dispatch(another())
	Promise.all(dispatchPromises)
		.then(() => {
			dispatch(setInitialize());
		})
}

export default appReducer;