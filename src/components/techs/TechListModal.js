import React, { useState, useEffect } from 'react';

import TechItem from './TechItem';

const TechListModal = () => {
   const [techs, setTechs] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      getTechs();
      // eslint-disable-next-line
   }, []);

   const getTechs = async () => {
      setLoading(true);
      const res = await fetch('/techs');
      const data = await res.json();
      setTechs(data);
      setLoading(false);
   };

   return (
      <div id="tech-list-modal" className="modal" style={modalStyle}>
         <div className="modal-content">
            <h4 style={{ marginBottom: '40px' }}>Technicians</h4>

            <ul className="collection">
               {!loading &&
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

export default TechListModal;
