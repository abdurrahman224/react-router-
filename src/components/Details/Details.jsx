import { useLoaderData } from "react-router-dom";
import Address from "../Address/Address";

const Details = () => {
  const users = useLoaderData();
  const { name, username, email, address, phone, website, company } = users;

  return (
    <div className="px-5 font-bold ">
      <h3>Name : {name}</h3>
      <h3>Username : {username}</h3>
      <p>Email : {email}</p>
      <h4>Address:</h4>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
      <p>Zipcode: {address.zipcode}</p>
      <p>Phone{phone}</p>
      <p>Website{website}</p>
      <h5>Company: </h5>
      <p>name : {company.name}</p>
      <p>catchPhrase : {company.catchPhrase}</p>
      <p>bs : {company.bs}</p>

    
    </div>
  );
};

export default Details;
