import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';

import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrent }) => {
   const { id, message, attention, tech, date } = log;

   const onDelete = () => {
      deleteLog(id);
      M.toast({ html: `Log #${id} deleted.` });
   };

   return (
      <li className="collection-item">
         <div>
            <a
               href="#edit-log-modal"
               className={`modal-trigger ${
                  attention ? 'red-text' : 'blue-text'
               }`}
               onClick={() => setCurrent(log)}
            >
               {message}
            </a>
            <br />
            <span className="grey-text">
               <span className="black-text">ID #{id}</span> last updated by{' '}
               <span className="black-text">{tech}</span> on{' '}
               <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className="secondary-content">
               <i className="material-icons grey-text">delete</i>
            </a>
         </div>
      </li>
   );
};

LogItem.propTypes = {
   log: PropTypes.object.isRequired,
   deleteLog: PropTypes.func.isRequired,
   setCurrent: PropTypes.func.isRequired
};

export default connect(
   null,
   { deleteLog, setCurrent }
)(LogItem);
