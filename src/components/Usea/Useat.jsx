import React from "react";
import { Link } from "react-router";

const Useat = ({ usear }) => {
  const {id, name, email, phone } = usear;

  return (
    <div className='border-1 border-red-500 rounded-lg p-4 mb-4'>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to = {`/users/${id}`}> Show Details </Link>
    </div>
  );
};

export default Useat;
