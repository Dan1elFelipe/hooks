import { TalContext } from "../Components/App";
import { useContext } from "react";

export const Hijo = ()=>{

    const user = useContext(TalContext)

    return (
        <>
            <h2>Componente hijo</h2>
            {user && <p>Hola { user.name }</p>}
        </>
    )
}