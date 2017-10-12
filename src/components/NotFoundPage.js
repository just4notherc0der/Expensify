import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div>404 Not Found</div>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
