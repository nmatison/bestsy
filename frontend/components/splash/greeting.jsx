import React from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
    this.state = {query_string: ""}
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchProducts(this.state).then(() => this.props.history.push('/search'))
  }


  update() {
    console.log(this.state)
    return (e) => {
      this.setState({["query_string"]: e.target.value})
    }
  }




render () {
  const cart = <img className="cart" src="https://png.icons8.com/ios-glyphs/50/000000/shopping-cart.png" />
  const personIcon = <img className="person-icon" src="https://png.icons8.com/cotton/50/000000/gender-neutral-user.png" />

  const sessionLinks = () => (
    <nav className="login-signup">
        <button className="signup-button" onClick={() => this.props.openModal('regtocontinue')}>Sell on Jetsy</button>
      <button className="signup-button" onClick={() => this.props.openModal('signup')}>Register</button>
      <button className="login-button" onClick={() => this.props.openModal('login')}>Sign In</button>
        <Link to='/cart' className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </nav>
  );

  const personalGreeting = () => (
    <span className="your-page">
      <Link to='/products/new' className="sell-link">Sell a travel item</Link>
      <Link className="you-link" to={`/users/${this.props.currentUser.id}`}>
        {personIcon}
        <span className="you-text">You</span>
      </Link>
      <input className="logout-input" type="submit" value="Log Out" onClick={this.props.logout} />
        <Link to='/cart' className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </span>
  )

    return (
      <nav className="nav-bar">
        <div className="title-and-search">
          <Link to="/" className="title">Jetsy</Link>
          <span className="search-span"><input
            onChange={this.update()}
            className="search-bar"
            type="text"
            placeholder="Search for travel items (this does not work yet)"/></span>
          <input type="submit" onClick={this.handleSubmit} className="search-submit" value="Search" />
        </div>
        { this.props.currentUser ? personalGreeting() : sessionLinks()}
      </nav>
    );
  }
}
export default withRouter(Greeting);
