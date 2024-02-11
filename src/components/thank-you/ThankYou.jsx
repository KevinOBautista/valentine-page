import React from "react";
import { motion } from "framer-motion";
const textVarients = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};
const ThankYou = () => {
	return (
		<motion.div
			className="Thankyou flex flex-col p-10 justify-center gap-10 items-center"
			variants={textVarients}
			initial="initial"
			animate="animate"
		>
			<h1 className="text-6xl text-center">Thank you</h1>
			<div className="rizzcontainer w-full h-auto m-auto">
				<img src="./rizz.gif" className="m-auto rounded-2xl" />
			</div>
			<audio controls autoPlay src="./rizz.mp3" />
			<a
				className="p-6 rounded-xl bg-gradient-to-r from-rose-400 to-rose-500 text-center text-xl shadow-lg"
				href="/yes"
			>
				Wait we're not done Click Here!
			</a>
		</motion.div>
	);
};

export default ThankYou;
