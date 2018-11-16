import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  // base constructor super props
  // constructor(props) {
  //   super(props);
  // this.
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };

  // this.handleFormOpen = this.handleFormOpen.bind(this);
  // this.handleCancel = this.handleCancel.bind(this);
  // but this is ugly binding it to constructor, these are boilerplatesq, these are inverse data flow(add and closing form)

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };
  // we copy our updated event into an empty object, is then assigned to what we're replacing with, not mutating state but taking clone of our updating event and copy, replacing the existing
  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };
  // if handleFormOpen is selected, reset handleEditEvent: selectedEvent to null, so we can use the create form and start the empty event and when we select from the list item we select the event that we want to show

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };
  // now pass this method/func down to our event form, so when submit this form we can call this method and update our state inside our dashboard
  // cuid to generate particular id b4 firestore-randomly generate id
  // spreadoperator- take all of our events array in our state and spread them out
  handleDeleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    });
  };
  // array filter method to remove the event we want to delete but create new array based on the remaining event, pass in id; if its not equalt to event id will return a new array with all the events with the id event and store that in updated events
  render() {
    const { selectedEvent } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={this.state.events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              upadateEvent={this.handleUpdatedEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

//  && is condition is true than event form will display and if it is false will be hidden
// if execute the function(), everytime form rerenders; open and close parenthesis, will execute the function imed page renters but if we want it to open only in click, this is referring to component class where 'this' is currently attached to. there isn't one attached to component so need to bind handleformopen method to component class
export default EventDashboard;
