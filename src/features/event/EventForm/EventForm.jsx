import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };
  // forms special case- resp for tracking their own state
  // If there is state passed in, trigger re-rendering, didmouunt life-cycle- event form already mounted so will not call again if properties changed, to effect that need to use another react cycle event comp will receive props, change/create event in clicking diff buttons
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }
  // will be received after mount, access to next and existing props
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  }

  // change an event is passed in when we select one
  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.upadateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };
  // preventdef- to prevent actually submitting any data, refs is a property in our component class

  // newEvent[evt.target.name]- destructuring assignment, to access property inside the object

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={event.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
