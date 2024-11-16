import { useState } from "react";
import "./App.css";
import "./assets/calculator.css";

import Button from "./components/Button/Button";
import Screen from "./components/Screen";
import data from "./data/data";

function App() {
  const [display, setDisplay] = useState("");
  const [resultBtn, setResultBtn] = useState([]);

    const handleClick = (value) => {


        if (value === "=") {
            console.log(resultBtn);
            const result = resultBtn
                .join("")
                .split(/(\D)/g)
                .map((value) => (isNaN(value) ? value : parseInt(value)))
                .reduce((acc, value, index, array) => {
                    switch (value) {
                        case "+":
                            return (acc = acc + array[index + 1]);
                        case "-":
                            return (acc = acc - array[index + 1]);
                        case "*":
                            return (acc = acc * array[index + 1]);
                        case "÷":
                            return (acc = acc / array[index + 1]);
                        default:
                            return acc;
                    }
                });
            setDisplay(result);
            setResultBtn([]);
        }
        else if (value === "AC") {
            setDisplay("");
            setResultBtn([]);
        }
        else if (value === "C") {
            setDisplay(prev => prev.slice(0, -1));
            setResultBtn(prev => prev.slice(0, -1));
        }


        else {
            setDisplay(prev => prev + value); // اضافه کردن به display
            setResultBtn(prev => [...prev, value]); // اضافه کردن به resultBtn
        }


    };
  return (
    <div className="calculator">
      <Screen display={display} result={resultBtn} />
      <div className="calculator__buttons">
        <div className="calculator__buttons-numbers">
          {data.map((data, index) => (
            // <Button key={String(index)} value={data.value} type={data.type} onClick={(value) => handleClick(value)}/>

            <Button key={String(index)} {...data} onPress={handleClick} />

            //   <Button
            //     key={String(index)}
            //     {...data}
            //     onPress={() => handleClick(data.value)}
            //   />
          ))}

          {/* <button className='button'>C</button>
          <button className='button'>Del</button>
          <button className='button'>%</button>
          <button className='button'>9</button>
          <button className='button'>8</button>
          <button className='button'>7</button>
          <button className='button'>6</button>
          <button className='button'>5</button>
          <button className='button'>4</button>
          <button className='button'>3</button>
          <button className='button'>2</button>
          <button className='button'>1</button>
          <button className='button'>8</button>
          <button className='button'>8</button>
          <button className='button'>1</button> */}
        </div>
        {/* <div className='calculator__buttons-operators'> */}
        {/* <button className='button operator-btn'>÷</button>
          <button className='button operator-btn'>×</button>
          <button className='button operator-btn'>-</button>
          <button className='button operator-btn'>+</button>
          <button className='button operator-btn'>=</button> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
