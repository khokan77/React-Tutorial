import { use } from "react";
import { User } from "./User";

export default function UserApi2({ usersPromise }) {
  const users = use(usersPromise);
  return (
    <div className="card">
      <p>User: {users.length}</p>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
