
import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState(" ");
	console.log(color);
	return (
		<div>
			<div className="rectangulo bg-dark text-center"></div>
			<div className="container text-center bg-dark rounded">
				<div onClick={() => setColor("red")} className="Figuras">
					<button type="button" className={"btn btn-danger mt-4" + " " + (color === "red" ? "sombraRed" : "")}></button>
				</div>
				<div onClick={() => setColor("yellow")} className="Figuras" style={{ marginTop: '15px' }}>
					<button type="button" className={"btn btn-warning mt-4" + " " + (color === "yellow" ? "sombraYellow" : " ")}></button>
				</div>
				<div onClick={() => setColor("green")} className="Figuras" style={{ marginTop: '15px' }}>
					<button type="button" className={"btn btn-success mt-4" + " " + (color === "green" ? "sombraGreen" : " ")}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;