import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../Shared/Loader';

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const handleDelete = (doctormama) => {
    console.log(doctormama);
    fetch(`https://doctors-portal-server-beta-dun.vercel.app/doctors/${doctormama._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          refetch();
          toast.success('albida mama. abar dakha hobe');
        }
      });
  };
  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('https://doctors-portal-server-beta-dun.vercel.app/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        const data = await res.json();
        return data;
      } catch {}
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center underline-offset-1 my-4 font-bold">
        Total doctors : {doctors?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img
                        src={doctor.img ? doctor.img : 'https://placeimg.com/192/192/people'}
                        alt="avatar"
                      />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="Confirmation_modal"
                    className="btn btn-sm btn-error">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete ${deletingDoctor.name}`}
          message={`If you delete ${deletingDoctor.name} then who is gonna treat you? he is very bad ${deletingDoctor.specialty} right?`}
          handleDelete={handleDelete}
          modalData={deletingDoctor}
          btnName="ha! re vai"
          closeModal={closeModal}></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
