import React from "react";
import { Link } from "react-router-dom";

const Plan = ({ plan }) => {
	const { img, desc, title, date, id } = plan;

	return (
		<section
			className="flex flex-col justify-center items-center text-center p-10"
			id={id}
		>
			<div className="text p-5">
				<h1 className="text-5xl">{title}</h1>
			</div>
			<div className="card bg-rose-200 rounded-xl border-4 border-rose-100 p-10 shadow-xl">
				<div className="top">
					<img className="m-auto" src={img} alt={title} />
				</div>
				<p className="text-3xl py-4">{desc}</p>
				<p className="text-2xl">Date: {date}</p>
			</div>
			{id < 4 && <h1 className="text-4xl p-5">Keep Scrolling!</h1>}
			{id == 4 && <h1 className="text-4xl p-5">More to come!</h1>}
			{id == 4 && (
				<Link
					to="/"
					className="p-10 bg-gradient-to-r from-rose-400 to-rose-500 text-xl rounded-full shadow-lg"
				>
					Home
				</Link>
			)}
		</section>
	);
};

export default Plan;
