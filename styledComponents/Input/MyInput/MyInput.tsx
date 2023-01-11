import styled from "styled-components";

interface myProp {
  topValue: number;
  bottomValue: number;
  inputColor: string;
}

export const MyInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(p: myProp) => p.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding-top: ${(p: myProp) => p.topValue || "24"}px;
  padding-bottom: ${(p: myProp) => p.bottomValue || "24"}px;
`;
