import React from 'react';
import styled from 'styled-components';

// Criando o componente estilizado
const FooterWrapper = styled.footer`
  background-color: #282a35;
  padding: 20px;
  text-align: center;
  color: white;
  margin-top: 45px;
  max-width: 100%;
`;

// Estilizando um parágrafo dentro do footer
const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Todos os direitos reservados - 2024 | Lenon TM</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
