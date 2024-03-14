import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import burgersImage from "../assets/food/burgers.jpeg";
import dogImage from "../assets/food/dog.jpeg";
import dumplingsImage from "../assets/food/dumplings.jpeg";
import koreanFood from "../assets/food/koreanfood.jpeg";
import pasta from "../assets/food/pasta.jpeg";
import pizza from "../assets/food/pizza.jpeg";
import ramen from "../assets/food/ramen.jpeg";
import salad from "../assets/food/salad.jpeg";
import steak from "../assets/food/steak.jpeg";
import sushi from "../assets/food/sushi.jpeg";

const Images = [
	{
		image: burgersImage,
		title: "Burgers",
		value: "burgers",
	},
	{
		image: dogImage,
		title: "Hot Dogs",
		value: "dogs",
	},
	{
		image: dumplingsImage,
		title: "Dumplings",
		value: "dumplings",
	},
	{
		image: koreanFood,
		title: "Korean Food",
		value: "koreanfood",
	},
	{
		image: pasta,
		title: "Pasta",
		value: "pasta",
	},
	{
		image: pizza,
		title: "Pizza",
		value: "pizza",
	},
	{
		image: ramen,
		title: "Ramen",
		value: "ramen",
	},
	{
		image: salad,
		title: "Salad",
		value: "salad",
	},
	{
		image: steak,
		title: "Steak",
		value: "steak",
	},
	{
		image: sushi,
		title: "Sushi",
		value: "sushi",
	},
	// {
	//     image: ,
	//     title: "",
	//     value: ""
	// },
];

const Food = () => {
	const [option, setOption] = useState("null");
	const navigate = useNavigate();

	const handleCheckboxChange = (value) => {
		setOption(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// navigate("/activities");
	};

	return (
		<div className="text-center">
			<h1 className="text-4xl">What food would you like to eat?</h1>
			<form
				className="flex flex-wrap gap-3 items-center justify-center mt-6"
				onSubmit={handleSubmit}
			>
				{Images.map((image, index) => (
					<label className="flex flex-col text-xl">
						<img
							src={image.image}
							alt={image.title}
							className="rounded-full border-4 border-rose-400 h-52 w-52 p-1 hover:border-rose-200"
						/>
						<input
							className="mt-2"
							type="checkbox"
							value={image.value}
							checked={option === image.value}
							onChange={() => handleCheckboxChange(image.value)}
						/>
						{image.title}
					</label>
				))}
			</form>
		</div>
	);
};
export default Food;
