import * as S from "./AboutBox.style";
import { motion } from "framer-motion";

const AboutBox = ({ title, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.03, stiffness: 500, mass: 10 }} transition={{ type: "spring" }}>
      <S.Container>
        <p>{title}</p>
        <h3>{text}</h3>
      </S.Container>
    </motion.div>
  );
};

export default AboutBox;
