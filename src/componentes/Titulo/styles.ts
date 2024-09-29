import styled from "styled-components";

type TituloProps = {
  fontSize?: number;
};

export const Titulo = styled.h3<TituloProps>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "14px")};
  font-weight: bold;
  margin-bottom: 16px;
`;
