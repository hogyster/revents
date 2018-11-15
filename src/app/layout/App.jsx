import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
// our component is javascript class that extends from react component and our component require single method called render, which then returns look like html rendered on the page (which is javascript, the jsx) similar to html but get compiled to javascript and injected to our html page. we use web packs behind the scenes, hot module replacement- make changes to our code and reflected on the page without refreshing.

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}
export default App;
