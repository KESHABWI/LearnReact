import ArrayandObject from "./components/ArrayandObject";
import Hello from "./components/Hello";
function App() {
  const setNumbers = [1, 2, 3, 4, 5];
  const user = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <>
      <Hello name="John" message="Welcome to the React world!" />
      <ArrayandObject setNumbers={setNumbers} user={user} />
    </>
  );
}

export default App;
