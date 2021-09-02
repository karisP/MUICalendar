import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
// import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
// import LuxonUtils from '@date-io/luxon';

ReactDOM.render(<MuiPickersUtilsProvider utils={DateFnsUtils}><App/></MuiPickersUtilsProvider>, document.getElementById('root'));