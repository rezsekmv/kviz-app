import { VERIFY_ANSWER, RESET_ALL} from "../actions/GameActions";


export function reducer( state = { goodAns:false, correct: '', submitted: false, point: 0}, action) {

	if (action.type === RESET_ALL) {
		return {
			goodAns: false,
			correct: '',
			submitted: false,
			point: state.point
		};
	}

	if (action.type === VERIFY_ANSWER) {
		let goodAns = false;
		let point = state.point;
		if (action.answer === action.item.correct.toUpperCase()) {
			goodAns = true;
			point++;
		}
		return {
			goodAns: goodAns,
			correct: action.item.correct.toUpperCase(),
			submitted: true,
			point: point
		}
	}
	return state;
}
