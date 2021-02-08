import React from 'react';
import {
  ItemWrapper,
  Circle,
  InfoWrapper,
  Title,
  Location,
  SessionTime,
  FirstRow,
} from "./ItemStyles";
import {IActiveUser, setActiveUser} from "../../modules/users/users.actions";
import {connect} from "react-redux";

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
      <ItemWrapper onClick={onClick}>
        <Circle/>
        <InfoWrapper>
          <FirstRow>
            <Title>{title}</Title>
            {false && <SessionTime>{sessionTime}</SessionTime>}
          </FirstRow>
          <Location>{location}</Location>
        </InfoWrapper>
      </ItemWrapper>
    );
  }
}

const mapDispatchToProps = {
  setActiveUser,
};

export const ItemContainer = connect(null, mapDispatchToProps)(Item);
