export const SET_NAME = 'SET_NAME';
export const VERIFY_ANSWER = 'VERIFY_ANSWER';
export const RESET_ALL = 'RESET_ALL';

export function resetAll() {
	return {
		type: RESET_ALL
	}
}

export function setName(name) {
	return {
		type: SET_NAME,
		name: name
	}
}

export function verifyAnswer(answer, item) {
	return {
		type: VERIFY_ANSWER,
		answer: answer,
		item: item
	}
}
