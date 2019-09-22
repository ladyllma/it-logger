import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechs } from '../../actions/techActions';

import TechItem from './TechItem';

const TechListModal = ({ techs, loading, getTechs }) => {
   useEffect(() => {
      getTechs();
      // eslint-disable-next-line
   }, []);

   return (
      <div id="tech-list-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4 style={{ marginBottom: '40px' }}>Technicians</h4>

            <ul className="collection">
               {!loading &&
                  techs !== null &&
                  techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
            </ul>
         </div>
      </div>
   );
};

const modalStyle = {
   width: '65%',
   height: '65%',
   padding: '10px'
};

TechListModal.propTypes = {
   techs: PropTypes.array.isRequired,
   getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   techs: state.tech.techs,
   loading: state.tech.loading
});

export default connect(
   mapStateToProps,
   { getTechs }
)(TechListModal);
