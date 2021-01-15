import styled from 'styled-components';
import {mediaQueries} from "../utils/mediaQueries";
import {gray} from "../utils/gray";

export const Wrapper = styled.div`
  display: none;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    display: block;
    padding: 127px 0 0 500px;
    height: 100vh;
    overflow: scroll;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${gray(0, 1)};
`;