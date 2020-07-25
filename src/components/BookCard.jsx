import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export const BookCard = ({ title, author, price, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} className="card__image"/>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Icon name='rub' />
        {price}
    </Card.Content>
  </Card>
)