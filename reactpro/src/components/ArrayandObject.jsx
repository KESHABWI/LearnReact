export default function ArrayandObject({ setNumbers, user }) {
  return (
    <div>
      {setNumbers} {user.name} is {user.age} years old and lives in {user.city}
    </div>
  );
}
