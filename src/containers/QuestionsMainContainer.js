import {connect} from 'react-redux';
import QuestionsMain from "../components/QuestionsMain";
import {addItem} from "../actions/QuestionActions";
import {reset} from "redux-form";

function mapStateToProps(state, props) {
	return {
		items: state.manageQuestionsReducer.items
	};
}

function mapDispatchToProps(dispatch, props) {
	return {
		addItem: (item) => dispatch(addItem(item)),
		resetForm: (formName) => dispatch(reset(formName))
	};
}

const QuestionsMainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionsMain);

export default QuestionsMainContainer;
