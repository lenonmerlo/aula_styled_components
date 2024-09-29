import Titulo from "../Titulo/Titulo";
import Paragrafo from "../Paragrafo/Paragrafo";
import { GitHubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
    Sou estudante de Ciência de Dados, Engenharia Front-end e Full Stack Python Developer, com foco em combinar habilidades técnicas de programação e análise de dados para desenvolver soluções inovadoras. Estou sempre em busca de aprimorar meus conhecimentos em Python, SQL, JavaScript e tecnologias de front-end para criar aplicações dinâmicas e visualmente atraentes, além de aplicar análises de dados em projetos que otimizem processos e gerem insights valiosos.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lenonmerlo&show_icons=true& theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lenonmerlo&layout=compact&langs_count=7& theme=dracula"/>
    </GitHubSecao>
  </section>
);

export default Sobre;
