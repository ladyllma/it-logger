import React, { useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   const onSubmit = () => {
      if (firstName === '' || lastName === '') {
         M.toast({ html: 'Please, enter a first name and a last name.' });
      } else {
         console.log(firstName, lastName);
         setFirstName('');
         setLastName('');
      }
   };

   return (
      <div id="add-tech-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4 style={{ marginBottom: '40px' }}>Add a Technician</h4>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="firstName"
                     value={firstName}
                     onChange={e => setFirstName(e.target.value)}
                  />
                  <label htmlFor="firstName" className="active">
                     First name
                  </label>
               </div>
            </div>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="lastName"
                     value={lastName}
                     onChange={e => setLastName(e.target.value)}
                  />
                  <label htmlFor="lastName" className="active">
                     Last name
                  </label>
               </div>
            </div>
         </div>
         <div className="modal-footer">
            <a
               href="#!"
               className="modal-close waves-effect blue waves-light btn"
               onClick={onSubmit}
            >
               Save
            </a>
         </div>
      </div>
   );
};

const modalStyle = {
   width: '65%',
   height: '65%',
   padding: '10px'
};

export default AddTechModal;
