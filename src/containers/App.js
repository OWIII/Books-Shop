import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';

import * as booksActions  from '../actions/books';
import App from '../components/App';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) => {
  return books.filter( obj => obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
  obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);
};

const searchBooks = (books, searchQuery, filterBy) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
}

const mapStateToProps = ({ books, filters }) => ({
  books: books.items && searchBooks(books.items, filters.searchQuery, filters.filterBy),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);