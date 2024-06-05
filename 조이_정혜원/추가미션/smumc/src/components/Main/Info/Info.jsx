import * as S from "./Info.style";
import Logo from "../../../assets/main-logo.webp";
import LogoLight from "../../../assets/main-light-logo.webp";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

const Info = () => {
  const { nowTheme } = useContext(ThemeContext);
  const { scrollY } = useScroll();

  const scaleImg = useTransform(scrollY, [0, 200, 400, 600], [1, 1.1, 1.2, 1.3]);
  const opacityImg = useTransform(scrollY, [0, 200, 600], [1, 0.5, 0]);

  return (
    <S.Container>
      <motion.img style={{ scale: scaleImg, opacity: opacityImg }} src={nowTheme ? Logo : LogoLight} />
      <div>
        <motion.h1 style={{ opacity: opacityImg }}>
          <b>U</b>niversity <b>M</b>akeUs <b>C</b>hallenge
        </motion.h1>
        <motion.p style={{ opacity: opacityImg }}>
          <b>앱&웹 서비스 런칭</b>에 <b>도전</b>하는 대학생 IT 연합동아리
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, stiffness: 500, mass: 10 }}
          style={{ opacity: opacityImg }}
          transition={{ type: "spring" }}
        >
          7기 모집예정
        </motion.button>
      </div>
    </S.Container>
  );
};

export default Info;
