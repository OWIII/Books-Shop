import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setBooks } from './actions/books';
import { MenuComponent } from './components/Menu';
import { BookCard } from './components/BookCard';
import { Container, Card } from 'semantic-ui-react';

class App extends React.Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios
      .get('./books.json')
      .then(({ data }) => {
        setBooks(data);
        this.forceUpdate();
      })
      .catch((error) => new Error(error));
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Card.Group itemsPerRow={3}>
          {isReady
            ? books.map((book, index) => (
                <BookCard key={index} {...book}></BookCard>
              ))
            : 'Загрузка...'}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (items) => dispatch(setBooks(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
