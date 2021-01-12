import React from 'react';
import {
  Wrapper,
} from './AppStyles';
import {LeftBar} from "./LeftBar/LeftBar";
import {MainArea} from "./MainArea/MainArea";
import {ActiveUserPopupContainer} from "./ActiveUserPopup/ActiveUserPopup";

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

export class App extends React.PureComponent<IProps> {
  render() {
    return (
      <Wrapper>
        <LeftBar/>
        {false && <MainArea/>}
        <ActiveUserPopupContainer/>
      </Wrapper>
    );
  }
}
