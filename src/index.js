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

TESTING
----------

For this application we are going to use JEST testing framework released by Facebook, which integrates well with React.
All of these tests can be performed manually of course, but the point in using them is that we will get feedback
if our application doesn't work as expected when we add a new feature for example (without the need to perform tests every time).

When JEST scrapes the entire project looking for test, it is looking for files with .test.js extension
ex: add.test.js

// failing test
//const add = (a, b) => a + b + 1;

// passing test
const add = (a, b) => a + b;

// test - global variable provided by JEST
test('should add 2 numbers', () => {
  // test will not pass if we throw an error from this function
  const result = add(3, 4);

  //This works but JEST provides us it's own assertion library, use it like below
  if(result !== 7) {
    throw new Error(`You added 4 and 3, the result was #${result}, expected 7`)
  }
  // better
  expect(result).toBe(7);
});

// another
const generateGreeting = (name) => `Hello ${name}!`;

test('should generate correct greeting', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike!');
});


Test files are ran through webpack and babel, so they also have all of the gret features such as ES6...

*/
