import { motion } from "framer-motion";

const CardAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
