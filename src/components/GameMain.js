import React from 'react';
import NameContainer from "../containers/NameContainer";
import { Route, Switch} from 'react-router-dom';
import QuizFormContainer from "../containers/QuizFormContainer";
import Score from "./Score";



class GameMain extends React.Component {

	submit = (values) => {
		let index = parseInt(this.props.location.pathname.substr(1));
		let item = this.props.items[index];
		this.props.verifyAnswer(values.answer, item)
	};


	render() {
		return (
			<div>
				{this.props.name !== '' ?
					<Switch>
						<Route path="/:index" children={<QuizFormContainer onSubmit={this.submit}/>}/>
					</Switch>
					: <NameContainer/>}
				<Score submitted={this.props.submitted} goodAns={this.props.goodAns} correct={this.props.correct} />
				<h4>Pontszám: {this.props.point}</h4>
			</div>
		);
	}
}

export default GameMain;
