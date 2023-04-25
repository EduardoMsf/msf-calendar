import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent, onAddNewEvent } from "../store"

export const useCalendarStore = () => {
  
  const { events, activeEvent } = useSelector( state => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = ( calendarEvent ) =>{
    dispatch( onSetActiveEvent(calendarEvent) )
  }

  const startSavingEvent = async( calendarEvent ) =>{
    if( calendarEvent._id ){
     
    }else{
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime()}) )
    }
  }

  return{
    events,
    activeEvent,
    
    setActiveEvent,
    startSavingEvent
  }
}
