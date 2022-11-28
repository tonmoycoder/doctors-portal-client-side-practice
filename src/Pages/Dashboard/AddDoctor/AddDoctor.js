import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../../Shared/Loader';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const hachkaTan = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentSpecialty');
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: imgData.data.url,
          };
          fetch('http://localhost:5000/doctors',{
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
          .then((res) => res.json())
          .then(data=> {console.log(data)
          if(data.insertedId){
            toast.success(`post ${data.insertedId} complete ${data.name}`);
            hachkaTan('/dashboard/manageDoctors')
          }
          })
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-96 p-7">
      <h2>this is doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register('name', {
              required: 'Name is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register('specialty')}
            defaultValue={'Please select a Specialty'}
            className="select select-ghost w-full max-w-xs">
            <option disabled>Please select a Specialty</option>
            {specialties.map((special) => (
              <option key={special._id} value={special.name}>
                {special.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register('photo', {
              required: 'Photo is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
        </div>
        <input className="btn btn-accent w-full mt-4" value="Add Doctor" type="submit" />
      </form>
    </div>
  );
};

export default AddDoctor;
