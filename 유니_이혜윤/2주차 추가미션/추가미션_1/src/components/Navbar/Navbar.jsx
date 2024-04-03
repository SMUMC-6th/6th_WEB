import * as N from './Navbar.style'

const Navbar = ({click, setClick}) => {
  return (
    <N.Container>
      <N.Header>Header</N.Header>
      <N.Menu><N.MenuButton onClick={() => { setClick((prev) => !prev)}}>
        {click ? "Content 보기" : "Content 보지 않기" }
      </N.MenuButton></N.Menu>
    </N.Container>
  )
}

export default Navbar;