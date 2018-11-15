import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events } = this.props;
    // events available as its coming from comp property, as they're been past down from our component parent above.
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </div>
    );
  }
}

export default EventList;
