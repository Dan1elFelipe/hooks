import { useState, useMemo } from 'react';

export const Lamemo = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Usamos el memo para que la suma se quede como en memoria o algo asi
  const sum = useMemo(() => {
    console.log(`Calculando la suma...`);
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <h2>Suma: {sum}</h2>
      <label>
        Número 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Número 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
};
