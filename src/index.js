import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import 'material-components-web/dist/material-components-web.min.css';
import { RMWCProvider } from '@rmwc/provider';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RMWCProvider><App /></RMWCProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
