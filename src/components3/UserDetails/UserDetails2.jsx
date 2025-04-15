import React, { use, useState } from "react";
import { Navigate, useLocation } from "react-router";

const UserDetails2 = ({ userDetailsPromise }) => {
  const { name, username } = use(userDetailsPromise);
  const [visit, setVisit] = useState(false);
  const location = useLocation();
  console.log(location);
  if (visit) return <Navigate to={"/"}></Navigate>;
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <button onClick={() => setVisit(true)}>Visit Home</button>
    </div>
  );
};

export default UserDetails2;
