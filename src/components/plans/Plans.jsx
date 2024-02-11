import React from "react";
import Plan from "./Plan";

const Plans = () => {
	const plans = [
		{
			id: 0,
			title: "Ice Skating",
			img: "./skating.gif",
			desc: "Learn to ice skate with your favorite person",
			date: "2/11 - 7pm",
		},
		{
			id: 1,
			title: "Niagara Falls",
			img: "./niagara.gif",
			desc: "Night time view of 1 of the 7 wonders of the world Niagara Falls!",
			date: "TBD",
		},
		{
			id: 2,
			title: "Paint and Sip",
			img: "./painting.gif",
			desc: "Painting competition between You and Me while drinking wine",
			date: "2/12 - Night Time",
		},
		{
			id: 3,
			title: "Puzzle Building",
			img: "./puzzle.gif",
			desc: "Bond building with puzzles",
			date: "2/13 - Night Time",
		},
		{
			id: 4,
			title: "Cooking with Kevito",
			img: "./cooking.gif",
			desc: "Cooking together a requested meal of yours. Lasagna soup?",
			date: "You get to pick cause I'll be cooking everynight regardless",
		},
	];
	const mappedPlans = plans.map((plan, index) => (
		<Plan plan={plan} key={index} />
	));
	return (
		<div className="plans">
			{mappedPlans.length > 0 && mappedPlans}
			{mappedPlans.length < 0 && "No plans, yikes"}
		</div>
	);
};

export default Plans;
