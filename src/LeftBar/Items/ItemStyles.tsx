import styled from 'styled-components';
import {colors} from "../../utils/colors";

export const ItemsWrapper = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  padding: 15px 0 15px 30px;
  cursor: pointer;
  align-items: center;
  transition: background ease .3s;
  background: transparent;
  border-radius: 10px;
  
  :hover {
    background: ${colors.gray100};
  }
`;

export const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: ${colors.gray10};
  margin-right: 10px;
`;

export const InfoWrapper = styled.div``;

export const Title = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  font-color: ${colors.grayGreat};
  margin-right: 10px;
`;

export const Location = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.gray300};
  letter-spacing: 1px;
`;

export const SessionTime = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${colors.gray300};
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
`;