import React, { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../components/Themes/Themes";


let app = createContext();


export default function AppContext({ children }) {
    const [click, setClick] = useState(false);
    const [opacity, setOpacity] = useState(false);
    const [themes, setThemes] = useState({});
    useEffect(() => {
        if (click) {
            setThemes(darkTheme)
        } else {
            setThemes(lightTheme)
        }
    }, [click]);
    useEffect(() => {
        setOpacity(true)
    }, [])
    let falseClick = () => setClick(false);
    return (
        <app.Provider value={{
            themes,
            click,
            setClick,
            falseClick,
            opacity,
        }}>
            {children}
        </app.Provider>
    )
}

export const useGlobalFunction = () => {
    return useContext(app);
}