import * as M from "./MainPage.style"

const MainPage = () => {
  return (
    <M.MainContainer>
      <M.MainTop><p>🎬환영합니다</p></M.MainTop>
      <M.MainBottom>Find your movies !<br />
      <input type="text"></input></M.MainBottom>
    </M.MainContainer>
  )
}

export default MainPage;