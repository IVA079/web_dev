function ColorList({ colors }) {
  const items = [];

  // create <li> elements with a simple for loop
  for (let i = 0; i < colors.length; i++) {
    items.push(<li key={i}>{colors[i]}</li>);
  }

  return (
    <div>
      <h3>My favorite colors:</h3>
      <ul>{items}</ul>
    </div>
  );
}

export default ColorList;
