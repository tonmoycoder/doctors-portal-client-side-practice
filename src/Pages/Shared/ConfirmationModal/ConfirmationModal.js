import React from 'react';

const ConfirmationModal = ({title, message,closeModal,modalData,handleDelete,btnName}) => {
  return (
    <div>
      {/* The button to open modal */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Confirmation_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label onClick={()=>handleDelete(modalData)} htmlFor="Confirmation_modal" className="btn">
              {btnName}
            </label>
            <button className='btn btn-outline' onClick={closeModal}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
