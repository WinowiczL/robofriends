import React from 'react';
import {Card} from "./Card";

export const CardList = ({robots}) => (
    <div>
        {robots.map((robot, index) => (
            <Card id={robot.id}
                  name={robot.name}
                  email={robot.email}
                  key={index}/>))}
    </div>
);