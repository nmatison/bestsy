import {fetchProducts, fetchProduct, deleteProduct} from '../../actions/product_actions';
import ProductShow from './products_show';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchReviews} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({product: state.entities.products[ownProps.match.params.productId],
  users: state.entities.users,
  currentUserId: state.session.id,
  reviews: Object.values(state.entities.reviews).filter((review) => review.product_id == ownProps.match.params.productId)
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
