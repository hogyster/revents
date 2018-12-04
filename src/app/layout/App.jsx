import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";

// our component is javascript class that extends from react component and our component require single method called render, which then returns look like html rendered on the page (which is javascript, the jsx) similar to html but get compiled to javascript and injected to our html page. we use web packs behind the scenes, hot module replacement- make changes to our code and reflected on the page without refreshing.

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                  {/* when we use route comp, will load the component we specify and replace the routes with that particular component, need route for home components*/}
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
