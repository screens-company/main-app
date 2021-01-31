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
  state = {
    sessionIds: [],
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/screen-share-session`)
      .then(result => result.json())
      .then(({sessions}) => this.setState({sessionIds: sessions}))
  }

  render() {
    return (
      <Wrapper>
        <LeftBar sessionIds={this.state.sessionIds} />
        {false && <MainArea/>}
        <ActiveUserPopupContainer/>
      </Wrapper>
    );
  }
}
