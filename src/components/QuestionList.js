import React from 'react';

class QuestionList extends React.Component {

	click = item => {
		this.props.deleteItem(item)
	};

	render() {
		return (
			<div className="row mx-5">
				<button className="btn btn-danger" onClick={e => this.click(this.props.item)}><i className="fa fa-trash-o"/></button>
				<h4 className="m-2">{this.props.item.question}</h4>
			</div>
		);
	}
}

export default QuestionList;
