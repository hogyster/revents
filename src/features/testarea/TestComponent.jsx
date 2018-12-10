import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
// connect- binding to the store - higher ordeer
import { incrementCounter, decrementCounter } from "./testActions";
// mapping the state to the props from the store
const mapState = state => ({
  data: state.test.data
});
// test matches from the reducer we used from the root reducer, access the data from test- data itself is referred as data from testreducer, now have
// access to data

const actions = {
  incrementCounter,
  decrementCounter
};
// mapdispatchtoactions used but can shorten it like above, take action finctions brought in and also add it to higher order comp so we no only have state bought into our comp but also our actions, so now we can make use of actions which will be passed down to our props of our comp and utilize them inside there
class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
        {/* using inc and dec directly coming from our props, need to destructure */}
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
// use connect and mapping the state- higher order- creates new comp with test comp and have state mapped from the store
