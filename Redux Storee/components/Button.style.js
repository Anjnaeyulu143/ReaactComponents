import styled from "styled-components";

export const Button = styled.button`
  width: 5em;
  height: 3em;
  background-color: ${(props) => props.backgroundColor}
  border-width: 0px;
  color: white;

  &:hover{
      background-color:blue
  }s
`;
