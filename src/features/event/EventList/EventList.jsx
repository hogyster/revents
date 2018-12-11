import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    // events available as its coming from comp property, as they're been past down from our component parent above.
    return (
      <div>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            // onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
