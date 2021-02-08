import React from 'react';
import {AuthForm} from "@/AuthForms/AuthForm";
import {Bar} from "@/Bar/Bar";
import {ActiveUserPopupContainer} from "@/ActiveUserPopup/ActiveUserPopup";
import {MainArea} from "@/MainArea/MainArea";
import {OuterStylesWrapper, Wrapper} from "@/AppStyles";

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {
  sessionIds: any[];
}

export class App extends React.PureComponent<IProps> {
  state: IState = {
    sessionIds: [],
  };

  componentDidMount() {
    fetch(`${process.env.API_URL}/screen-share-session`)
      .then(result => result.json())
      .then(({sessions}) => this.setState({sessionIds: sessions}))
  }


  private getAuthForm = () => {
    return (
      <OuterStylesWrapper>
        <AuthForm type="sing-up" />
      </OuterStylesWrapper>
    );
  };

  render() {
    /** Delete after adding routes **/
    const testAuth = false;

    if (testAuth) {
      return this.getAuthForm();
    }

    return (
      <OuterStylesWrapper>
        <Wrapper>
          <Bar sessionIds={this.state.sessionIds} />
          {false && <MainArea/>}
          <ActiveUserPopupContainer/>
        </Wrapper>
      </OuterStylesWrapper>
    );
  }
}
