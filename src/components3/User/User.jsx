import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails/UserDetails2";

const User = ({ user }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };
  const { id, name, username, email } = user;
  const [showInfo, setShowInfo] = useState(false);
  const userDetailsPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  return (
    <div className="border-2 rounded-2xl p-2 mt-2">
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <Link to={`../users/${id}`}>Show Details</Link>
      <br />
      <button className="btn" onClick={handleNavigate}>
        Details of {id}
      </button>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "SHOW" : "HIDE"}
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userDetailsPromise={userDetailsPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
