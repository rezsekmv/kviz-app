import React from 'react';
import QuestionsContainer from '../containers/QuestionsContainer';
import AddQuestionForm from "./AddQuestionForm";

class QuestionsMain extends React.Component {

	submit = values => {
		this.props.addItem(values);
		this.props.resetForm('question');
	};

	render() {
		return (
			<div>
				{this.props.items.map( (item,i) => {
				return(
					<QuestionsContainer key={i} item={item}/>
				)
				})}
				<AddQuestionForm onSubmit={this.submit}/>
			</div>
		);
	}
}

export default QuestionsMain;
