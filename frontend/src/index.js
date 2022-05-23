import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import App from './App';
import store from './store/configureStore'

Sentry.init({
  dsn: "https://ad2e0cd949a94f489c912905d2cac847@o1124811.ingest.sentry.io/6163094",
  integrations: [new Integrations.BrowserTracing()],
});

ReactDOM.render(
  <Router>
      <Provider store = {store}>
       <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);
