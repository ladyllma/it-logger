import React, { useState } from 'react';

const AddLogModal = () => {
   const [message, setMessage] = useState('');
   const [attention, setAttention] = useState(false);
   const [tech, setTech] = useState('');

   const onSubmit = () => {
      console.log(message, tech, attention);
   };

   return (
      <div id="add-log-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4>Enter a system log</h4>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="message"
                     value={message}
                     onChange={e => setMessage(e.target.value)}
                  />
                  <label htmlFor="message" className="active">
                     Log message
                  </label>
               </div>
            </div>
            <div className="row">
               <div className="input-field">
                  <select
                     name="tech"
                     value={tech}
                     onChange={e => setTech(e.target.value)}
                     className="browser-default"
                  >
                     <option value="" disabled>
                        Select Technician
                     </option>
                     <option value="John Doe">John Doe</option>
                     <option value="John Doe">John Doe</option>
                     <option value="John Doe">John Doe</option>
                  </select>
               </div>
            </div>
            <div className="row">
               <div className="input-field">
                  <label>
                     <input
                        type="checkbox"
                        name="attention"
                        className="filled-in"
                        checked={attention}
                        value={attention}
                        onChange={() => setAttention(!attention)}
                     />
                     <span>Needs attention?</span>
                  </label>
               </div>
            </div>
         </div>
         <div className="modal-footer">
            <a
               href="#!"
               className="modal-close waves-effect waves-green btn"
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

export default AddLogModal;
