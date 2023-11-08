import { Hijo } from "./Hijo";
import { useState } from "react";
import { createContext } from "react";

export const TalContext = createContext()

export const App =()=> {

    const [user, setUser] = useState(null);

    const cambiaLogin = () =>{
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: "si",
                email: "si@telacomessinpretexto"
            })
        }
    }

    return(        
        <TalContext.Provider value={user}>
            <button onClick={cambiaLogin}>Cambiar Login</button>
            <div>
                <Hijo/>
            </div>
        </TalContext.Provider>
    )
}

