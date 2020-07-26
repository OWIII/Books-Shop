import React from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

import { MenuComponent } from './Menu';
import { BookCard } from './BookCard';
import { LoaderComponent } from './Loader';
import { Filter } from './Filter';

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
    const { books, isReady, setFilter } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Filter setFilter={setFilter}/>
        <Card.Group itemsPerRow={3}>
          {isReady
            ? books.map((book, index) => (
                <BookCard key={index} {...book}></BookCard>
              ))
            : <LoaderComponent />}
        </Card.Group>
      </Container>
    );
  }
}

export default App;