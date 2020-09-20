import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './router/MyRouter';
import baseStore from './mobx'

ReactDOM.render(
  <Provider baseStore={baseStore}>
    <MyRouter />
  </Provider>,
  document.getElementById('root')
);
