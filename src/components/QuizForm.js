import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Redirect, Link, useParams} from 'react-router-dom';


let QuizForm = (props) => {
	const { handleSubmit } = props;
	const { index } = useParams();
	const item = props.items[index];
	return (
		<div>
			{!item ? <Redirect to="/" /> :

			<form onSubmit={handleSubmit}>
				<h2 className="m-3">{item.question}</h2>

				<div className="form-group">
					<label htmlFor="a">A</label>
					<Field className="mx-2" component="input" type="radio" id="a" name="answer" value="A"/>
					<label htmlFor="a">{item.a}</label>
				</div>
				<div className="form-group">
					<label htmlFor="b">B</label>
					<Field className="mx-2" component="input" type="radio" id="b" name="answer" value="B"/>
					<label htmlFor="b">{item.b}</label>
				</div>
				<div className="form-group">
					<label htmlFor="c">C</label>
					<Field className="mx-2" component="input" type="radio" id="c" name="answer" value="C"/>
					<label htmlFor="c">{item.c}</label>
				</div>
				<div className="form-group">
					<label htmlFor="d">D</label>
					<Field className="mx-2" component="input" type="radio" id="d" name="answer" value="D"/>
					<label htmlFor="d">{item.d}</label>
				</div>

				{props.submitted ? <button onClick={() => {props.resetForm('quiz'); props.resetAll()}} >
						<Link to={`/${parseInt(index)+1}`} className="btn btn-info">Tovább</Link>
					</button>:
					<input className="btn btn-success" disabled={props.submitted} type="submit" value="Küldés"/>}

			</form>}
		</div>
		);
};

QuizForm = reduxForm({
	form: 'quiz'
})(QuizForm);

export default QuizForm;
