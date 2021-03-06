import React from "react";
import { withRouter } from "react-router";

class ScrollToTop extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
