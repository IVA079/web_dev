



import './DoubleDice.css'; 

function DoubleDice() {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;

  //  Decide the class name using if...else
  let className = "";
  if (num1 === num2) {
    className = "win";
  } else {
    className = "lose";
  }

  return (
    <div className={className}>
      <h2>First Die: {num1}</h2>
      <h2>Second Die: {num2}</h2>
      {num1 === num2 ? <h3>You Win!</h3> : <h3>You Lose!</h3>}
    </div>
  );
}

export default DoubleDice;
