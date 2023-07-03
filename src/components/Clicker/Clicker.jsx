import { useState } from 'react';

function Clicker(props) {
     // useState is a function, and we'll pass in whatever we want the initial value to be
  // [ currentStateValue, functionToUpdateStateValue]
  const [ name, setName ] = useState("Quynh");
  const [ count, setCount ] = useState(0);

//// count++ = count + 1 
//   const handleClick = () => {
//     setCount(count +1)
//     console.log('clicked')
//   }
//   return (
//     <div className="App">
//       <p>Hello! My name is {name}.</p>
//       <button onClick={(handleClick)}>Click me!</button>
//       <p>I've clicked the button {count} times.</p>
//     </div>
//   );
// }

  return (
    <div className="App">
      <p>Hello! My name is {name}.</p>
      <p>My favorite color is {props.color}</p>
      <button onClick={() => setCount(count + 1) }>Click me!</button>
      <p>I've clicked the button {count} times.</p>
    </div>
  );
}

export default Clicker