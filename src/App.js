import React, { Fragment, useEffect } from 'react';

import SearchBar from './components/layout/SearchBar';
import AddLogModal from './components/logs/AddLogModal';
import AddBtn from './components/layout/AddBtn';
import Logs from './components/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
   useEffect(() => {
      // Init Materialize JS
      M.AutoInit();
   });

   return (
      <Fragment>
         <SearchBar />
         <div className="container">
            <AddBtn />
            <AddLogModal />
            <Logs />
         </div>
      </Fragment>
   );
};

export default App;