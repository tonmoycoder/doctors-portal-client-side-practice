import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description: 'Fluoride treatment is a process of adding fluoride to public water supplies in order to help prevent tooth decay.',
      img: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description: 'A cavity filling is a dental process where hole of tooth is filled with a material to restore the tooth to its original shape and function.',
      img: cavity,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description: 'Teeth whitening is a process of lightening the teeth by removing stains and discoloration of teeth of patiences.',
      img: whitening,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="mt-16">
        <div className="text-center mb-3">
          <h3 className="text-xl font-bold text-teal-400 uppercase">Our Services</h3>
          <h2 className="text-3xl font-bold">Services We Provide</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
