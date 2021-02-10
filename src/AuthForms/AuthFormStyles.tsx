import styled from "styled-components";
import {mediaQueries} from "@/utils/mediaQueries";
import {colors} from "@/utils/colors";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 300px;
  margin-top: -100px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    margin: 0;
    width: 400px;
    height: 300px;
  }
`;

export const Content = styled.div`
  padding: 25px 30px 0px 30px;
  width: 100%;
`;

export const InputItem = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const InputName = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.input<{borderColor: string}>`
  outline: none;
  padding: 5px;
  -webkit-appearance: none;
  border: 1px solid ${({borderColor}) => borderColor};
  border-radius: 4px;
  width: 70%;
  height: 30px;
  font-size: 16px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    width: 250px;
  }
`;

export const Button = styled.div`
  color: ${colors.grayGreat};
  font-weight: 500;
  user-select: none;
  cursor: pointer;
`;

export const Title = styled.div`
  color: ${colors.blue};
  font-weight: 500;
  user-select: none;
`;
