import { evaluate } from "mathjs";
import { useState } from "react";
import './Calculator.css'; 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operations = ["+", "-", "*", "/"];
const equalSing = '='; 
const Calculator = () => {
    const [value , setValue] = useState(''); 
    const createHandleClick = (op)=>setValue(value.concat(op)); 
  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" value={value} readOnly className="inputUser"/>
      <div role="grid">
        {rows.map((row, index) => {
          return (
            <div role="row" key={index}>
              {row.map((number) => {
                return <button className="btnNumbers" onClick={()=>createHandleClick(number)} key={number}> {number}</button>;
              })}
            </div>
          );
        })}
        {
            operations.map((operation, index) => {
                return <button  className="btnOperation" onClick={()=>createHandleClick(operation)} key={index}>{operation} </button>
            })
        }
            </div>
            <div>
        <button className="btnEqual" onClick={()=>setValue(""+evaluate(value))}>{equalSing}</button>
        <button className="btnClear" onClick={()=>setValue('')}>clear</button>
            </div>
    </section>
  );
};

export{
numbers, operations, Calculator
}