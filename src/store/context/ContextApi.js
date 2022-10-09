import { createContext, useContext, useState } from "react";
const ContextApi = createContext({});
export const useContextApi = () => useContext(ContextApi);

export const ContextApiProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [login, setLogin] = useState(false);
    return (
        <ContextApi.Provider value={{ index, setIndex, login, setLogin }}>
            {children}
        </ContextApi.Provider>
    );
}