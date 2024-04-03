import * as C from './Content.style'

const Content = ({click}) => {
  return (
    <C.Content $click={click}>
      <C.Hero $click={click}>HERO</C.Hero>
      <C.Main $click={click}>MAIN</C.Main>
      <C.Image $click={click}><img src="https://images.unsplash.com/photo-1711914767931-c764ec56b177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnI2ZkFNdGZjaVV8fGVufDB8fHx8fA%3D%3D"></img></C.Image>
      <C.Extra $click={click}>EXTRA</C.Extra>
    </C.Content>
  )
}

export default Content;