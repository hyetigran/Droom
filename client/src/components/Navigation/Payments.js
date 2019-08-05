import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Droom"
        description="$10 for 10 Super Likes"
        amount={1000}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button>Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
