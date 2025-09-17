export default function Fruits() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
