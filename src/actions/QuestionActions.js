export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';
export const LOAD_DATA = 'LOAD_DATA';

export function loadData() {
	return {
		type: LOAD_DATA
	}
}

export function addItem(item) {
	return {
		type: ADD_ITEM,
		item: item
	}
}

export function deleteItem(item) {
	return {
		type: DEL_ITEM,
		id: item.id
	}
}
