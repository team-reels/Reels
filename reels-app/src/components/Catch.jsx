import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import "../styles/catch.scss";
import dev_fish from "../assets/dev_fish.jpg";

function Catch() {
	const params = useParams();
	const catchId = params.catchId;
	// const { catchData, setCatchData } = useAxios('link');
	const catchData = {
		id: "1",
		species: "fish",
		weight: 5,
		size: 5,
		type: "fish",
		likes: 5,
	};

	return (
		<div className="content-container catch">
			<div className="catch-wrapper">
				{/* <div className='buttons'>
				<button className='next'>Next</button>
				<button className='prev'>Prev</button>
			</div> */}
				<div className="picture">
					<img src={dev_fish} alt="fsh" />
				</div>
				<div className="stats">
					<div className="fishStats">
						{Object.entries(catchData).map(([k, v]) => {
							if (k === "id") return;

							return (
								<div key={catchData.id} className="stat">
									{k.toUpperCase()}: {v}
								</div>
							);
						})}
					</div>
					<div className="loadoutStats">
						{/* <img src={dev_fish} alt="rod" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catch;
