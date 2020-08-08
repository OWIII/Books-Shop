import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';


const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

export const MenuComponent = ({ totalPrice, count, items, removeFromCart }) => (
  <Menu>
    <Menu.Item
      name='browse'
      onClick={() => { }}
    >
      Магазин книг
      </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
        name='signup'
        onClick={() => { }}
      >
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
        </Menu.Item>

      <Popup
        trigger={
          <Menu.Item
            name='help'
            onClick={() => { }}
          >
            Корзина (<b>{count}</b>&nbsp;шт.)
        </Menu.Item>}
        content={!!count && items.map(book => <CartComponent {...book} />)}
        on="click"
        hideOnScroll
      >
      </Popup>
    </Menu.Menu>
  </Menu>
);