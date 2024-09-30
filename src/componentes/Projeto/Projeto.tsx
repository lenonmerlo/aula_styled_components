import Paragrafo from "../Paragrafo/Paragrafo";
import { Titulo } from "../Titulo/styles";

import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas feita com VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto

