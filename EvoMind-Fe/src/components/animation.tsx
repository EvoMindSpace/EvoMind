"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const FadeInWhenVisible = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={{ duration: 0.5 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
		>
			{children}
		</motion.div>
	);
};

export const StaggerChildren = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ staggerChildren: 0.2 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
};

export const ScaleIn = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};
