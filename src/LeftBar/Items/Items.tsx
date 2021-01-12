import React from 'react';
import {ItemsWrapper} from "./ItemStyles";
import {ItemContainer} from "./Item";

interface IProps {}

export const fakeData = [
  {
    title: '123-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '221-112-153',
    sessionTime: '12 min',
    location: 'RU, Moscow',
  },
  {
    title: '717-112-153',
    sessionTime: '15 min',
    location: 'RU, Moscow',
  },
  {
    title: '819-112-153',
    sessionTime: '20 min',
    location: 'RU, Moscow',
  },
  {
    title: '431-112-153',
    sessionTime: '30 min',
    location: 'RU, Moscow',
  },
  {
    title: '573-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '918-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '431-112-153',
    sessionTime: '30 min',
    location: 'RU, Moscow',
  },
  {
    title: '573-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '918-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '573-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
  {
    title: '918-112-153',
    sessionTime: '10 min',
    location: 'RU, Moscow',
  },
];

export class Items extends React.PureComponent<IProps> {
  render() {
    return (
      <ItemsWrapper>
        {fakeData.map((el, index) => <ItemContainer
          key={index}
          title={el.title}
          sessionTime={el.sessionTime}
          location={el.location}
        />)}
      </ItemsWrapper>
    );
  }
}

