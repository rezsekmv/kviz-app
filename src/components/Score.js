import React from "react";

function Score(props) {
	return(
		<div>
			<h5 className="m-3">{
				props.submitted &&
				(props.goodAns ? 'Gratulálok, jó válasz!' : `Sajnos nem jó, helyes válasz: ${props.correct}`)
			}
			</h5>
		</div>
	)
}

export default Score;
