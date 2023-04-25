import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { addHours } from 'date-fns'


import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../"
import { getMessagesEs, localizer } from '../../helpers'
import { useState } from 'react'
import { useUiStore } from '../../hooks'
import { useCalendarStore } from '../../hooks'

// const events = [{
//   title: "Cumpleaños de Elizabeth",
//   notes: "Pastel",
//   start: new Date(),
//   end: addHours( new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: 123,
//     name: "Eduardo"
//   }
// }]


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal, toggleDateModal } = useUiStore()
  const { events, setActiveEvent, activeEvent } = useCalendarStore()

  const eventStyleGetter = ( event, start, end, isSelected ) =>{

    const style = {
      backgroundColor: "#347cf7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "#fff"
    }

    return { style }

  }

  const onDoubleClick = ( event ) =>{
    // console.log({click: event});
    // openDateModal()
    toggleDateModal()
  }

  const onSelect = ( event ) =>{
    
    setActiveEvent(event)
  }

  const onViewChange = ( event ) =>{
    localStorage.setItem('lastView', event)
    setLastView( event )
  }
  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onView={ onViewChange }
        onSelectEvent={ onSelect }
    />

    <CalendarModal />
    <FabAddNew />
    { activeEvent 
        ? <FabDelete /> 
        : ''
    }

    </>
  )
}
