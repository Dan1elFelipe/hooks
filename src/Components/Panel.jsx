import { useContext } from "react";
import { ThemeContext } from "../Routes/N3";

export const Panel = ({children, title}) =>{
    const theme = useContext(ThemeContext);
    const clasname = `Panel - ${theme}`;

    return(
        <>
            <section className={clasname}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}