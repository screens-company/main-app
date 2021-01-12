import React from 'react';
import {
  Wrapper,
  Logo,
  Search,
  ItemsWrapper,
  InnerWrapper,
} from './LeftBarStyles';
import {logoImages} from "../images/logo";
import {Items} from "./Items/Items";

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

export class LeftBar extends React.PureComponent<IProps> {
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <Logo src={logoImages.main}/>
          <Search
            placeholder="Search users"
          />
          <ItemsWrapper>
            <Items/>
          </ItemsWrapper>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

