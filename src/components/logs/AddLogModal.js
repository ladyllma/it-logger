import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
   const [message, setMessage] = useState('');
   const [attention, setAttention] = useState(false);
   const [tech, setTech] = useState('');

   const onSubmit = () => {
      if (message === '' || tech === '') {
         M.toast({ html: 'Please, enter a message and a tech.' });
      } else {
         const log = {
            message,
            attention,
            tech,
            date: new Date()
         };

         addLog(log);
         M.toast({ html: `New log added by ${tech}` });
         setMessage('');
         setTech('');
         setAttention(false);
      }
   };

   return (
      <div id="add-log-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4 style={{ marginBottom: '40px' }}>Enter a system log</h4>
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

AddLogModal.propTypes = {
   addLog: PropTypes.func.isRequired
};

export default connect(
   null,
   { addLog }
)(AddLogModal);
