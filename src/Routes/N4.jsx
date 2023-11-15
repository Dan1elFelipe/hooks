import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === 'Aumenta tu edad') {
      return {
        age: state.age + 1
      };
    }
    throw Error('que? so.');
  }
  
  export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { age: 0 });
  
    return (
      <>
        <button onClick={() => {
          dispatch({ type: 'Aumenta tu edad' })
        }}>
          Incrementar edad
        </button>
        <p>¡Hola! Tú tienes {state.age}.</p>
      </>
    );
  }