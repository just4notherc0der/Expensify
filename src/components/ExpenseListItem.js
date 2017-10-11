import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// destructuring props, I could have also done it the usual way
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <p>{props.description}</p>
    <p>{props.amount}</p>
    <p>{props.createdAt}</p>
    <button odClick={() => {
      dispatch(removeExpense({ id }));
    }}></button>
  </div>
);

export default connect()(ExpenseListItem);
