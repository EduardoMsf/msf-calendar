import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const tempEvent = {
    _id: new Date().getTime(),
    title: "Cumpleaños de Elizabeth",
    notes: "Pastel",
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: 123,
      name: "Eduardo"
    }
  }
export const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null

  },
  reducers: {
    onSetActiveEvent: (state, { payload }) =>{
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) =>{
      state.events.push( payload )
      state.activeEvent = null
    }

  }
});

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions
