import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';
// One of the big things about components is that they take in something called props
// prop is going to the parameter that we get from our functional component

// main properties that exists on this props object is one called children it will always
//be there bnut it if there's no children it'll be null.

//childrens are what we pass in <cardList>
export const Cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
