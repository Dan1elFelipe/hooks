import{ useState, useRef } from 'react';
 
export const ElUseRef = () => {
    const count = useRef(null);
    const [number, setNumber] = useState(0);
 
    const checkNumber = () => {
        if (count.current.value < 10) {
            count.current.style.backgroundColor = "red";
        } else {
            count.current.style.backgroundColor = "green";
        }
    };
 
    return (
        <div className="App">
            <h1>Ingresa un numero mayor a 10</h1>
            <input
              ref={count}
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => checkNumber()}>Click</button>
        </div>
    );
}