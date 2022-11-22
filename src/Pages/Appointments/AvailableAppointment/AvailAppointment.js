import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader';
import AppointmentOption from '../Appointment/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, 'PP')

  const { data: appointmentOptions = [], refetch ,isLoading } = useQuery({
    queryKey: ['appointmentOptions',date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loader></Loader>
  }

  // useEffect(() => {
  //     fetch('http://localhost:5000/appointmentOptions')
  //         .then(res => res.json())
  //         .then(data => setAppointmentOptions(data))
  // }, [])



  return (
    <section className="my-16 max-w-7xl mx-auto">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {selectedDate ? format(selectedDate, 'PP') : '00:00'}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
          ></BookingModal>
      )}
    </section>
  );
};

export default AvailAppointment;
