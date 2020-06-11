import {SET_NAME} from "../actions/GameActions";


export function reducer( state = { name:'', currentItem: 0, point:0 }, action) {



	if (action.type === SET_NAME) {
		return {
			name: action.name,
			currentItem: state.currentItem,
			point: state.point
		}
	}

	return state;
}
