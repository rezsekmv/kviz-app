import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddQuestionForm = (props) => {
	const { handleSubmit } = props;
	return (
		<form className="m-5" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="question"><h2>Kérdés:</h2></label><br/>
				<Field className="form-control" name="question" component="input" type="text"/><br/>
			</div>

			<h2>Válaszok:</h2>
			<div className="form-group">
				<label htmlFor="a">A:</label>
				<Field className="form-control" name="a" component="input" type="text"/><br/>


				<label htmlFor="b">B:</label>
				<Field className="form-control" name="b" component="input" type="text"/><br/>

				<label htmlFor="c">C:</label>
				<Field className="form-control" name="c" component="input" type="text"/><br/>

				<label htmlFor="d">D:</label>
				<Field className="form-control" name="d" component="input" type="text"/><br/>
			</div>
			<div>
				<label htmlFor="correct">Helyes válasz betűje:</label>
				<Field className="form-control" name="correct" component="input" type="text"/><br/>
			</div>
			<input className="btn btn-success" type="submit" value="Mentés"/>
		</form>

	)
}

AddQuestionForm = reduxForm({
	form: 'question'
})(AddQuestionForm);

export default AddQuestionForm
