import {connect} from 'react-redux';
import GameMain from "../components/GameMain";
import {verifyAnswer} from '../actions/GameActions'

function mapStateToProps(state, props) {
	return {
		items: state.manageQuestionsReducer.items,
		name: state.quizReducer.name,
		point: state.verificationReducer.point,
		correct: state.verificationReducer.correct,
		goodAns: state.verificationReducer.goodAns,
		submitted: state.verificationReducer.submitted
	};
}

function mapDispatchToProps(dispatch, props) {
	return {
		verifyAnswer: (answer, item) => dispatch(verifyAnswer(answer, item))
	};
}

const GameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GameMain);

export default GameContainer;
