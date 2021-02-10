import styled from 'styled-components';
import {EZIndex} from "../utils/zIndex";
import {colors} from "../utils/colors";
import {mediaQueries} from "../utils/mediaQueries";

export const InnerWrapper = styled.div`
  width: 100%;
  border-right: none;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${EZIndex.ONE};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray200};
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 90px;
  margin: 50px 0 50px 30px;
`;

export const Search = styled.input`
  margin: 10px 0 20px 30px;
  width: 80%;
  height: 40px;
  border: 1px solid ${colors.gray100};
  color: ${colors.grayGreat};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  border-radius: 5px;
  padding: 0 5px;
  
  ::placeholder {
    color: ${colors.gray300};
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ItemsWrapper = styled.div`
  height: calc(100vh - 175px);
  overflow: scroll;
`;