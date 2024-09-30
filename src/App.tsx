import Footer from './componentes/Footer/Footer'
import Projetos from './componentes/Projetos/Projetos'
import Sidebar from './componentes/Sidebar/Sidebar'
import Sobre from './componentes/Sobre/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
      <Sidebar />
      <main>
        <Sobre />
        <Projetos />
      </main>
      </Container>
      <Footer/>
      </>
  )
}

export default App
