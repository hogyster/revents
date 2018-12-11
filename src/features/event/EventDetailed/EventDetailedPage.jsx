import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

// can pass second parameter, as router properties are attached to the component as its own prop, not smtg getting from the store
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  // have empty event, simply display nothing on the page if error
  let event = {};
  // check if eventId and check if events in our store, if that is the case, will get events that match the id, filter event, use event.id, check eventId from the parameters, filter array methods return new array even if it brings back one particular element of array, so in order to acces; need to specify the index 0
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
