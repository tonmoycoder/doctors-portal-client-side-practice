import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailAppointment from '../AvailableAppointment/AvailAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}></AppointmentBanner>
      <AvailAppointment selectedDate={selectedDate}></AvailAppointment>
    </div>
  );
};

export default Appointment;
