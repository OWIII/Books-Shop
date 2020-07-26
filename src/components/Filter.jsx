import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export const Filter = ({ setFilter }) => {
  const [state, setState] = useState({
    activeItem: 'all',
  });

  const handleItemClick = (event, { name }) => {
    setState({
      ...state,
      activeItem: name,
    });
    setFilter(name);
  };


  return (
    <Menu secondary>
      <Menu.Item
        name='all'
        active={state.activeItem === 'all'}
        onClick={handleItemClick}
      >
        Все
      </Menu.Item>
      <Menu.Item
        name='popular'
        active={state.activeItem === 'popular'}
        onClick={handleItemClick}
      >
        Популярные
      </Menu.Item>
      <Menu.Item
        name='price_high'
        active={state.activeItem === 'price_high'}
        onClick={handleItemClick}
      >
        По цене (дорогие)
        </Menu.Item>
      <Menu.Item
        name='price_low'
        active={state.activeItem === 'price_low'}
        onClick={handleItemClick}
      >По цене (дешевые)</Menu.Item>
      <Menu.Item
        name='author'
        active={state.activeItem === 'author'}
        onClick={handleItemClick}
      >По автору</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Поиск...' />
        </Menu.Item>
      </Menu.Menu>
  </Menu>
  )
}