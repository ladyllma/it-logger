import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

import TechSelectOptions from '../techs/TechSelectOptions';
import { updateLog, clearCurrent } from '../../actions/logActions';

const EditLogModal = ({ current, clearCurrent, updateLog }) => {
   const [message, setMessage] = useState('');
   const [attention, setAttention] = useState(false);
   const [tech, setTech] = useState('');

   useEffect(() => {
      if (current) {
         setMessage(current.message);
         setAttention(current.attention);
         setTech(current.tech);
      }
      // eslint-disable-next-line
   }, [current]);

   const onSubmit = () => {
      if (message === '' || tech === '') {
         M.toast({ html: 'Please, enter a message and a tech.' });
      } else {
         const log = {
            id: current.id,
            message,
            attention,
            tech,
            date: new Date()
         };

         updateLog(log);
         M.toast({ html: `Log #${log.id} updated by ${log.tech}.` });
         setMessage('');
         setTech('');
         setAttention(false);
      }
   };

   return (
      <div id="edit-log-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4 style={{ marginBottom: '40px' }}>Edit the system log</h4>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="message"
                     value={message}
                     onChange={e => setMessage(e.target.value)}
                     placeholder="Log message"
                  />
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
                     <TechSelectOptions />
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

EditLogModal.propTypes = {
   current: PropTypes.object.isRequired,
   clearCurrent: PropTypes.func.isRequired,
   updateLog: PropTypes.func.isRequired
};

const mapToStateToProps = state => ({
   current: state.log.current
});

export default connect(
   mapToStateToProps,
   { clearCurrent, updateLog }
)(EditLogModal);
