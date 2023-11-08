import { useContext } from "react";
import { ThemeContext } from "../Routes/N3";

export const Button = ({onClick, children}) =>{
    const theme = useContext(ThemeContext);
    const clasname = `buton-${theme}`;

    return(
        <>
            <button className={clasname} onClick={onClick}>{children}</button>
        </>
    )
}