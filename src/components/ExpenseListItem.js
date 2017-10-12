import React from 'react';
import { Link } from 'react-router-dom';

// destructuring props, I could have also done it the usual way
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <hr />
  </div>
);

export default ExpenseListItem;
