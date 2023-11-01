import React, { useState } from "react";

function App() {
	const [name, setName] = useState("prod");

	return (
		<div>
			<span>{name}</span>
		</div>
	);
}

export default App;
