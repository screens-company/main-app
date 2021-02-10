import React from 'react';
import {ItemsWrapper} from "./ItemStyles";
import {fakeData} from "../../Bar/Items/Items";
import {ItemContainer} from "./Item";

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

export class Items extends React.PureComponent<IProps> {
  render() {
    return (
      <ItemsWrapper>
        {fakeData.map((el, index) => <ItemContainer
          key={index}
          title={el.title}
          location={el.location}
          sessionTime={el.sessionTime}
        />)}
      </ItemsWrapper>
    );
  }
}

