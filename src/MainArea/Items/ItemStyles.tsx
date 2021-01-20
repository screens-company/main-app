import styled from 'styled-components';
import {colors} from "../../utils/colors";
import {gray} from "../../utils/gray";

export const ItemsWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 50px 50px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TitleLocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

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
  margin-right: 10px;
`;

export const SessionTime = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${colors.gray300};
`;

export const PagePicture = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid ${colors.gray100};
  background: ${gray(255, 1)};
`;