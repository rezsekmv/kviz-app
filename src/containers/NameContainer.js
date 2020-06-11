import {connect} from 'react-redux';
import NameInput from "../components/NameInput";
import {setName} from '../actions/GameActions';

function mapStateToProps(state, props) {
	return {
		items: state.manageQuestionsReducer.items,
		name: state.quizReducer.name
	};
}

function mapDispatchToProps(dispatch, props) {
	return {
		setName: (name) => dispatch(setName(name))
	};
}

const NameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NameInput);

export default NameContainer;
