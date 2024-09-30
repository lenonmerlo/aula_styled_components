import Avatar from "../Avatar/Avatar";
import Paragrafo from "../Paragrafo/Paragrafo";
import Titulo from "../Titulo/Titulo";

import { Descricao, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lenon Merlo</Titulo> {/* Título com tamanho ajustado */}
      <Paragrafo tipo="secundario" fontSize={16}>lenonmerlo</Paragrafo>
      <Descricao tipo="principal">Full Stack Developer</Descricao>
      <Descricao tipo="principal">Data Scientist</Descricao>
      </SidebarContainer>
  </aside>
);

export default Sidebar;
