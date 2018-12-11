import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";
// when app initializes these events will be in our store
const initialState = [
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

// reducer function below

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

// take copy of our state and add another item into that copy and return that copy of the state. - easy way is spread operator- two separate objects in a new array that will be returned and add the event we're creating-Object.assign, give empty target object and pass in the payload.event, the event we're creating into empty object than is part of our state array, after create event will have 3 objects in an array, new array we're returning so not mutating directly.
export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};
// spread operator to get the array we currently have, filter this time -gives us a new copy of the array when it returns, want to get event id that is not equal to payload.event.id- going to have array everything except for the event which matches our current id and then will use object assign to replace the one we're filtering out in this filter method. replace with objct.assign. this mean that the event- will be everything except for the event which matches current id, object assign to replace the one we're filtering out. as removing our event from particular array then assign it with new.

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

// want to return events that do not match our event ID, not sending event object across so will be just payload.eventId

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
