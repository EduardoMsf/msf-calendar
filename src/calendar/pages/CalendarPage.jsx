import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { addHours } from 'date-fns'


import { Navbar } from "../"
import { getMessagesEs, localizer } from '../../helpers'

const events = [{
  title: "Cumpleaños de Elizabeth",
  notes: "Pastel",
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: "#fafafa",
  use: {
    _id: 123,
    name: "Eduardo"
  }
}]


export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) =>{

    console.log({event, start, end, isSelected});

    const style = {
       backgroundColor: "#347cf7",
       borderRadius: "0px",
       opacity: 0.8,
       color: "#fff"
    }

    return { style }

  }
  return (
    <>
      <Navbar />

      <Calendar
      culture="es"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={ getMessagesEs() }
      eventPropGetter={ eventStyleGetter }
    />

    </>
  )
}
