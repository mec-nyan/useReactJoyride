import Display from "../Display";
import Button from "../Button";

function Calculator() {
  const numbers = "1234567890".split("");
  const operators = "+-*/".split("");

  return (
    <div className="calc">
      <Display content="" />
      <div className="pad">
        <div className="numbers">
          {numbers.map((n) => (
            <Button name="num" content={n} />
          ))}
          <Button name="equals" content={"="} />
        </div>
        <div className="operators">
          {operators.map((op) => (
            <Button name="op" content={op} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
