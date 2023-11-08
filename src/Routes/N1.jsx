import { useState } from "react"


export const ElTal = () => {

        //credenciales para el login
        const [name, setName] = useState("")
        const [password, setPassword] = useState("")


        //el counter
        const [counter, setCounter]  = useState(0);

        //esto tambien es el tal 
        const [mistake, setMistake] = useState(false)
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            if(name == "" || password ==""){
                setMistake(true)
                return 
            }
            setMistake(false)
            
        }

        return(
            <>
    
            <h1>Login useState</h1>

            <h1 className="contador">{counter}</h1>
    
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={() => alert("Hur hur hur hur") }>Iniciar Sesion</button>
                <button>Registrate</button>
            </form>

            <button className="btn1" onClick={() => setCounter(counter + 1)}>si</button>
    
            {mistake && <p>Faltan campos por completar </p>}
    
            </>
        )
    }