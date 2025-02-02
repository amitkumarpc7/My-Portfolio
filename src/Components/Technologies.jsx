import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10 ,- 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-3xl">Skills</h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap justify-center gap-4">
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500 " />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
         variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <FaNode className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 hover:bg-white transition duration-300 ease-in-out p-4"
        >
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
