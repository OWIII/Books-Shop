import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy.js';
import * as cartActions from '../actions/cart';
import { MenuComponent } from '../components/Menu';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);