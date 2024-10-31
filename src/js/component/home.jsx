
import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState(" ");
	console.log(color);
	return (
		<div className="container text-center bg-dark">
			<div onClick={() => setColor("red")} className="Red">
				<button type="button" className={"btn btn-danger" + " " + (color === "red" ? "sombra" : "")}></button>
			</div>
			<div onClick={() => setColor("yellow")}>
				<button type="button" className={"btn btn-warning" + " " + (color === "yellow" ? "sombra" : " ")}>Warning</button>
			</div>
			<div onClick={() => setColor("green")}>
				<button type="button" className={"btn btn-success" + " " + (color === "green" ? "sombra" : " ")}>Success</button>
			</div>
		</div>
	);
};

export default Home;