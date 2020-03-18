import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
// import Page from './components/Page.js';
import { store } from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import App from './containers/App'


ReactDOM.render(
  <Provider store={store}>
    <div className='app'>
      <App/>
    </div>
    {/*<Page />*/}
  </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
