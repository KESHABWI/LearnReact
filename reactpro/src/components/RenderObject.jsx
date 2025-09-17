export default function RenderObject() {
  const Fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Purple" },
  ];
  return (
    <div>
      <ul>
        {Fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
}
