import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

export const BookCard = (book) => {
  const { title, author, price, image, addToCart, addedCount } = book;

  return (
    <Card>
      <Image src={image} wrapped ui={false} className="card__image" />
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
      <Button onClick={addToCart.bind(this, book)}>Добавить в корзину {!!addedCount && `(${addedCount})`}</Button>
    </Card>
  )
}