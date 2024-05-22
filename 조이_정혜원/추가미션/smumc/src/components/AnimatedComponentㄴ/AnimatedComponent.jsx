import { motion } from "framer-motion";
import { styled } from "styled-components";
import theme from "../../theme";

const AnimatedComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <Wrapper>{children}</Wrapper>
    </motion.div>
  );
};

export default AnimatedComponent;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  height: 100vh;
`;
