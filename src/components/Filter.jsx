import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

export const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}
    >
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}
    >
      По цене (дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}
    >
      По цене (дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'author'}
      onClick={setFilter.bind(this, 'author')}
    >
      По автору
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery} placeholder='Поиск по книгам...' />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)