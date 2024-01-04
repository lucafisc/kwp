import { motion } from "framer-motion";

export default function AppearingLine() {
    return <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
    >
      <hr className="border-primary border-1 w-full"></hr>
    </motion.div>;
  }