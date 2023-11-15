import { useState, useMemo } from 'react';

export const ElUseMemo = () => {
    const [color1, setColor1] = useState("blue");
    const [color2, setColor2] = useState("green");

    const toggleColor1 = () => {
        setColor1(color1 === "blue" ? "red" : "blue");
    };

    const toggleColor2 = () => {
        setColor2(color2 === "green" ? "orange" : "green");
    };

    const displayColor = useMemo(() => {
        let now = new Date().getTime();
        while (new Date().getTime() < now + 1000);
        return color1 === "blue" ? "cool" : "hot";
    }, [color1]);

    return (
        <div className="App">
            <h2 style={{ color: color1 }}>Text 1 color: {color1}</h2>
            <h4>It is {displayColor} color</h4> {/* Remove the parentheses here */}
            <button onClick={toggleColor1}>Toggle Color</button>

            <h2 style={{ color: color2 }}>Text 2 color: {color2}</h2>
            <button onClick={toggleColor2}>Toggle Color</button>
        </div>
    );
}