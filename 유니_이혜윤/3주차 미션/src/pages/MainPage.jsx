import * as M from "./MainPage.style"
import { BiMoviePlay } from "react-icons/bi";

const MainPage = () => {
  return (
    <M.MainContainer>
      <M.MainTop>환영합니다</M.MainTop>
      <M.MainBottom><BiMoviePlay />Find your movies !<br /><input type="text"></input></M.MainBottom>
    </M.MainContainer>
  )
}

export default MainPage;