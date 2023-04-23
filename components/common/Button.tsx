import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonStyleProp {
  buttonType: "transparent" | "colored";
}

interface ButtonProps extends ButtonStyleProp {
  to: string;
  text: string;
  style?: React.CSSProperties;
}

const StyledButton = styled(Link)<ButtonStyleProp>`
  display: inline-block;
  margin-top: 1.5em;
  padding: 0.5em 2.5em;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${({ buttonType }) =>
    buttonType === "transparent" ? "transparent" : "#000"};
  color: ${({ buttonType }) =>
    buttonType === "transparent" ? "#000" : "#fefefe"};
`;

export default function Button({ to, text, style, buttonType }: ButtonProps) {
  return (
    <StyledButton to={to} buttonType={buttonType} style={style}>
      {text}
    </StyledButton>
  );
}
