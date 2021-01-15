import React from 'react';
import {connect} from "react-redux";
import {
  Wrapper,
  InfoWrapper,
  Title,
  Location,
  SessionTime,
  PagePicture,
  TitleLocationWrapper,
} from "./ItemStyles";
import {IActiveUser, setActiveUser} from "../../modules/users/users.actions";

interface IOwnProps {
  title: string;
  sessionTime: string;
  location: string;
}

interface IDispatchProps {
  setActiveUser: typeof setActiveUser;
}

interface IProps extends IOwnProps, IDispatchProps {}

class Item extends React.PureComponent<IProps> {
  private clickHandler = (payload: IActiveUser) => {
    const {setActiveUser} = this.props;

    setActiveUser(payload);
  };

  render() {
    const {
      title,
      sessionTime,
      location,
    } = this.props;

    const onClick = () => this.clickHandler({title, sessionTime, location});

    return (
      <Wrapper onClick={onClick}>
        <InfoWrapper>
          <TitleLocationWrapper>
            <Title>{title}</Title>
            <Location>{location}</Location>
          </TitleLocationWrapper>
          <SessionTime>{sessionTime}</SessionTime>
        </InfoWrapper>
        <PagePicture/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  setActiveUser,
};

export const ItemContainer = connect(null, mapDispatchToProps)(Item);



