'use client'

import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import SectionThree from "../components/Home/SectionThree";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <SectionOne />
      </motion.div>
      <motion.div variants={item}>
        <SectionTwo />
      </motion.div>
      <motion.div variants={item}>
        <SectionThree />
      </motion.div>
    </motion.div>
  );
}
