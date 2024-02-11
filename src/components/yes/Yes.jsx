import React from "react";
import { motion } from "framer-motion";
import Plans from "../plans/Plans";
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

const Yes = () => {
	return (
		<>
			<section className="yes flex flex-col justify-center items-center gap-10 p-10 ">
				<motion.h1
					className="text-5xl text-center"
					variants={textVarients}
					initial="initial"
					animate="animate"
				>
					Oh you actually said Yes!
				</motion.h1>
				<motion.h2
					className="text-3xl"
					variants={textVarients}
					initial="initial"
					animate="animate"
				>
					{" "}
					Heres what's planned:
				</motion.h2>
				<motion.img
					animate={{
						opacity: 0,
						y: 10,
						transition: {
							duration: 2,
							repeat: Infinity,
						},
					}}
					src="/scroll.png"
					alt=""
				/>
			</section>
			<Plans />
		</>
	);
};

export default Yes;
