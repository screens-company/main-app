import styled from 'styled-components';
import {EZIndex} from "../utils/zIndex";
import {gray} from "../utils/gray";
import {colors} from "../utils/colors";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${gray(255, 1)};
  z-index: ${EZIndex.TWO};
  min-width: 100vw;
  min-height: 100vh;
`;

export const Exit = styled.img`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  width: 20px;
`;

export const ContentWrapper = styled.div`
  padding: 127px 100px 100px 100px;
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 800px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${gray(0, 1)};
`;

export const Button = styled.div`
  width: 123px;
  height: 43px;
  border-radius: 3px;
  background-color: ${colors.green};
  color: ${gray(255, 1)};
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PagePicture = styled.div`
  margin-top: 35px;
  width: 800px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid ${colors.gray100};
  background: ${gray(255, 1)};
`;

export const SessionIFrame = styled.iframe`
  margin-top: 35px;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  background: ${gray(255, 1)};
`;