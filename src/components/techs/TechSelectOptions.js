import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ techs, loading, getTechs }) => {
   useEffect(() => {
      getTechs();
      // eslint-disable-next-line
   }, []);

   return (
      !loading &&
      techs !== null &&
      techs.map(tech => (
         <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
            {tech.firstName} {tech.lastName}
         </option>
      ))
   );
};

TechSelectOptions.propTypes = {
   techs: PropTypes.array.isRequired,
   loading: PropTypes.bool.isRequired,
   getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   techs: state.tech.techs,
   loading: state.tech.loading
});

export default connect(
   mapStateToProps,
   { getTechs }
)(TechSelectOptions);
