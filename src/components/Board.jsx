import React from 'react';
import { Card } from 'semantic-ui-react';
import Radium from 'radium';


const Board = ({ board }) => (
  <Card>
    {board.number}e bestuur
  </Card>
);

export default Radium(Board);
