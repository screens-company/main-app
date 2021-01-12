import React from 'react';
import {
  Wrapper,
  Title,
} from './MainAreaStyles';
import {Items} from "./Items/Items";

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

export class MainArea extends React.PureComponent<IProps> {
  render() {
    return (
      <Wrapper>
        <Title>
          Active Sessions
        </Title>
        <Items/>
      </Wrapper>
    );
  }
}

