import {connect} from 'react-redux';
import {deleteItem} from "../actions/QuestionActions";
import QuestionList from "../components/QuestionList";

function mapStateToProps(state, props) {
	return {};
}

function mapDispatchToProps(dispatch, props) {
	return {
		deleteItem: (item) => dispatch(deleteItem(item))
	};
}

const QuestionsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionList);

export default QuestionsContainer;
