import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
   const onDelete = () => {
      deleteTech(id);
      M.toast({ html: `${firstName} ${lastName} technician deleted.` });
   };

   return (
      <li className="collection-item">
         <div>
            {firstName} {lastName}
            <a
               href="#!"
               onClick={onDelete}
               className="secondary-content modal-close"
            >
               <i className="material-icons grey-text">delete</i>
            </a>
         </div>
      </li>
   );
};

TechItem.propTypes = {
   tech: PropTypes.object.isRequired,
   deleteTech: PropTypes.func.isRequired
};

export default connect(
   null,
   { deleteTech }
)(TechItem);
