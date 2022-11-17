import React from 'react';
import Button from '../../../Components/Button/Button';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <section
      className="mt-32 mb-12 pb-1"
      style={{
        background: `url(${appointment})`,
      }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="mt-[-150px] hidden md:block lg:w-1/2 scale-105 "
          />
          <div>
            <h4 className="text-lg text-teal-400 font-bold">Appointment</h4>
            <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
            <p className="text-white py-6">
            Dedicated 24X7 call center to set appointments with your preferred doctor. Queries regarding doctors&apos; appointment schedule, earliest available doctors and other appointment related information are provided through the appointment desk. Our trained, experienced and skilled appointment desk executives will assist you to get doctors&apos; appointments at your convenient schedule, answer your queries regarding all kinds of medical services and guide you how to avail them.
            </p>
            <Button>Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
