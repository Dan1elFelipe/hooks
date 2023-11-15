import { useReducer, useRef } from "react";

export const ListaTareas = () => {
    //nose
    const inputRef = useRef();

    //est es el reducer
    const [tarea, dispatch] = useReducer((state = [], action) => {

        switch(action.type) {
            case 'add_tarea': {
                return[
                    ...state,
                    {id: state.length, titulo: action.titulo}
                ]
            }
                case 'paraguay': {
                    return state.filter((tarea, index) => index != action.index);
                }
            default: {
                return state;
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch({
            type: 'add_tarea',
            titulo: inputRef.current.value
        });
    }

    return (
        <>
        <h1>Lista tareas</h1>
        <form onSubmit={handleSubmit}>
            <label> Tarea</label>
            <input type="text" name="Titulo" ref={inputRef}/>
            <input type="submit" value="Enviar" />
        </form>
        <div className="tarea">
            {tarea && tarea.map((tarea, index) => (
                <div className="tarea" key={index}>
                    <p>{tarea.titulo}</p>
                    <button onClick={()=> dispatch({type: 'paraguay', index})}>Borrar</button>
                </div>
            ))}
        </div>
        </>
    )
}