import React from 'react';
import {connect} from "react-redux";
import {IStore} from "../reducers/reducers";
import {selectActiveUser, selectIsActiveUser} from "../modules/users/users.selectors";
import {IActiveUser, setActiveUser} from '../modules/users/users.actions';
import {
  Wrapper,
  Exit,
  ContentWrapper,
  Title,
  TitleButtonWrapper,
  SessionIFrame,
} from "./ActiveUserPopupStyles";
import {DEFAULT_USER} from "../modules/users/users.reducers";
import {activeUserPopupImages} from "../images/activeUserPopup";

interface IStateProps {
  activeUser: IActiveUser;
  isActiveUser: boolean;
}

interface IDispatchProps {
  setActiveUser: typeof setActiveUser;
}

interface IProps extends IStateProps, IDispatchProps {}

class ActiveUserPopup extends React.PureComponent<IProps> {
  state = {
    iframeWidth: 0,
    iframeHeight: 0,
  };

  private onClickExitHandler = () => {
    const {setActiveUser} = this.props;

    setActiveUser(DEFAULT_USER);
  };

  private handleIframeSize = (width: number, height: number) => {
    if (width && height) {
      this.setState({
        iframeWidth: width,
        iframeHeight: height,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("message", (e) => this.handleIframeSize(e.data?.width, e.data?.height), false);
  }

  render() {
    const {isActiveUser, activeUser} = this.props;
    const {iframeHeight, iframeWidth} = this.state;

    if (!isActiveUser) {
      return null;
    }

    return (
      <Wrapper>
        <Exit
          onClick={this.onClickExitHandler}
          src={activeUserPopupImages.exit}
        />
        <ContentWrapper>
          <TitleButtonWrapper>
            <Title>{activeUser.title}</Title>
          </TitleButtonWrapper>
          {/* <PagePicture/> */}
          <SessionIFrame width={iframeWidth} height={iframeHeight} src={`http://localhost:3001/admin?sid=${activeUser.title}`} />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    activeUser: selectActiveUser(state),
    isActiveUser: selectIsActiveUser(state),
  };
};

const mapDispatchToProps = {
  setActiveUser,
};

export const ActiveUserPopupContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveUserPopup);



