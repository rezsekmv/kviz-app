import React, {createRef} from 'react';
import {Link} from 'react-router-dom'

class NameInput extends React.Component {

	constructor(props) {
		super(props);
		this.nameRef = createRef();
	}

	submitName = name => {
		this.props.setName(name)
	};

	render() {
		return (
			<div>
				<h4>Írd be a neved:</h4>
				<input className="form-control" type="text" ref={this.nameRef}/>
				<Link className="btn btn-success" to={this.props.items?'/0':'/'} onClick={e => this.submitName(this.nameRef.current.value)}>Mentés</Link>
			</div>
		);
	}
}

export default NameInput;
