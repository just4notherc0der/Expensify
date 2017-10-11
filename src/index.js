import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

/*

HOC (Higher Order Component) - a component that renders another component
Some advantages of using HOC pattern are:
- render hijacking
- prop manipulation
- abstracting the state

ex:

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrapedComponent) => { // common naming pattern
  // higher order component
  return (props) => (
    <div>
      { props.isAdmin && <p>This is Private Info, please don't share</p> }
      <WrappedComponent {...props} /> // pass down props
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo idAdmin={true} info="details" />, document....);

*/
