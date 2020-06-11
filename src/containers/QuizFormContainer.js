import {connect} from 'react-redux';
import QuizForm from "../components/QuizForm";
import {reset} from "redux-form";
import {resetAll} from "../actions/GameActions";

function mapStateToProps(state, props) {
	return {
		items: state.manageQuestionsReducer.items,
		submitted: state.verificationReducer.submitted
	};
}

function mapDispatchToProps(dispatch, props) {
	return {
		resetForm: (formName) => dispatch(reset(formName)),
		resetAll: () => dispatch(resetAll())

	};
}

const QuizFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizForm);

export default QuizFormContainer;
