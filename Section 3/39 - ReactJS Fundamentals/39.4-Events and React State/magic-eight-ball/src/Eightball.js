import { useState } from "react";
import "./Eightball.css"

const Eightball = (props) => {

    const [color, setColor] = useState('blue');
    const [msg, setMsg] = useState('Think of a question...')

    function askBall(answers){
        
        let choice = answers[Math.floor(Math.random() * answers.length)];
        setColor(choice.color);
        setMsg(choice.msg);
    };
    
    return (
      <div className="Eightball" onClick={() => askBall(props.answers)}>
        <div className={`Eightball-${color}`}>
          <h3 className="Eightball-msg">{msg}</h3>
        </div>
      </div>
    );
}

export default Eightball;