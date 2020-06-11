import {ADD_ITEM, DEL_ITEM, LOAD_DATA} from "../actions/QuestionActions";

export function reducer(state = { items: [], nextItemId: 1 }, action) {

	if (action.type === LOAD_DATA) {
		if (localStorage.getItem("items") !== null) {
			let items = JSON.parse(localStorage.getItem('items'));
			let id = (items.length ? items.reverse()[0].id + 1 : 1);	//calculate the next avalible id
			return {
				items: items,
				nextItemId: id
			}
		}
	}
	if (action.type === ADD_ITEM) {

		action.item.id = state.nextItemId;
		let newItems = [...state.items, action.item];

		//set to localstorage
		localStorage.setItem('items', JSON.stringify(newItems));

		return {
			items: newItems,
			nextItemId: state.nextItemId+1
		}
	}
	if (action.type === DEL_ITEM) {
		let newItems = state.items.filter(item => item.id !== action.id);

		//del from localstorage
		localStorage.setItem('items', JSON.stringify(newItems));

		return {
			items: newItems,
			nextItemId: state.nextItemId
		}
	}
	return state;
}
