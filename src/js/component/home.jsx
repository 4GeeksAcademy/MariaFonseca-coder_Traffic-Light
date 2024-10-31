
import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState(" ");
	return (
		<div className="text-center">
			<div>
				<button type="button" class="btn btn-danger">Danger</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning">Warning</button>
			</div>
			<div>
				<button type="button" class="btn btn-success">Success</button>
			</div>
		</div>
	);
};

export default Home;
