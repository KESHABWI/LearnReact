import ArrayandObject from "./components/ArrayandObject";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import RenderObject from "./components/RenderObject";
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
      <Fruits />
      <RenderObject />
    </>
  );
}

export default App;
