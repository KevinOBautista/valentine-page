import React, { useState } from "react";
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

const Homepage = () => {
	const messageArr = ["No", "Please", "Pretty please!", "really?"];
	const [counter, setCounter] = useState(0);
	const [message, setMessage] = useState(messageArr[counter]);

	function onClick() {
		if (counter >= 4) {
			setCounter(0);
		} else {
			setMessage([messageArr[counter]]);
			setCounter(counter + 1);
		}
	}

	return (
		<motion.div
			className="homepage flex flex-col justify-center items-center gap-10 p-10"
			initial="initial"
			animate="animate"
			variants={textVarients}
		>
			<h1 className="text-5xl text-center">Will you be my valentine?</h1>
			<div className="flex flex-row buttons gap-2">
				<motion.a
					href="/thankyou"
					className=" rounded-2xl bg-green-400 p-4 px-10 text-xl"
					whileTap={{ scale: 1.05 }}
				>
					Yes
				</motion.a>
				{/* <motion.button
					className=" rounded-2xl bg-green-400 p-4 px-10 text-xl"
					whileTap={{ scale: 1.05 }}
				>
					
				</motion.button> */}
				<motion.button
					className=" rounded-2xl  bg-red-400 p-4 px-10 text-xl"
					// whileTap={{ scale: 1.05 }}
					onClick={onClick}
				>
					{message}
				</motion.button>
			</div>
			<div className="cat-gif">
				<img
					src="https://media0.giphy.com/media/I1nwVpCaB4k36/giphy.gif?cid=82a1493b8khp40btjyj68jsppxdw8cvmm95q9hyikagcij16&ep=v1_gifs_search&rid=giphy.gif&ct=g"
					alt=""
				/>
				<p>
					<a href="https://giphy.com/gifs/cat-kitten-please-9uwnYUDw342pq"></a>
				</p>
			</div>
		</motion.div>
	);
};

export default Homepage;
