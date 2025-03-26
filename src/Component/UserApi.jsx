import { use } from "react";

export default function UserApi({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div className="school">
      <p>User: {users.length}</p>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}
