import { useState, useEffect } from "react";

export const ElUseEffect = () => {
    
    const [contador, setContator] = useState(0);
    useEffect(() =>{
        console.log("estoy sintiendo una wea")
        return function(){
            console.log("se desmonto la cosa")
        }
    }, [contador]);

    
    const [count, setCount] = useState(0);
    const [nextcount, setNextcount] = useState(0);

    useEffect(()=>{
        setNextcount(count + 1);
    },[count]);


    /*
    //llamado de la api del jotazon
    const[user, setUser] = useState([]); 

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const data = await response.json();
            setUser(data);
        }
        fetchUsers();
    }, []);
    */
        
    return (
        <>
            
            <div className="si">
                <h1>useEffect</h1>
                <button onClick={() => setContator(contador+1)}>tal</button>
            </div> <br />

            <div className="no">
            <h1>El segundo tal</h1>
            <h3>Total: {count}</h3>
            <h3>Next count: {nextcount}</h3>
            <img 
                className="coso"
                src="/src/img/yocuando.jpg"
                alt="el coso"
                width={300}
                height={300}
            /> <br />
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            </div>
        </>
    )
}


/*

    
    
    
    <ul>
        {user.map((user) => (
            <li key={user.id}>
                {user.name} - {user.email}
            </li>
        ))}
    </ul>
*/