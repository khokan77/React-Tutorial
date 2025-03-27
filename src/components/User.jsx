export function User({ user }) {
  console.log(user);
  const { name, email } = user;
  ``;
  return (
    <div className="school">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
}
