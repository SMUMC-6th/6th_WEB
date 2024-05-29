import { useSelector } from "react-redux";
import Headers from "../style/Header.style";

const Header = () => {
    const count = useSelector((state) => state.counter.count);

    return <Headers>UMC Redux-Toolkit 카운터 실습 / 나는 장바구니야 {count}</Headers>
}

export default Header