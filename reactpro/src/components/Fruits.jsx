export default function Fruits() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <ul>
          <li>{fruit}</li>
        </ul>
      ))}
    </div>
  );
}
