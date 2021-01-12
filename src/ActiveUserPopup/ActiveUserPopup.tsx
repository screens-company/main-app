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
  PagePicture,
  Button,
  TitleButtonWrapper,
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
  private onClickExitHandler = () => {
    const {setActiveUser} = this.props;

    setActiveUser(DEFAULT_USER);
  };

  render() {
    const {isActiveUser, activeUser} = this.props;

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
            <Button>Request control</Button>
          </TitleButtonWrapper>
          <PagePicture/>
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



