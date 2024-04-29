import { createContext, useState } from "react";

const CommonContext = createContext();

export const DataProvider = ({children}) => {

    const [count, setCount]= useState(10)


    return (
        <CommonContext.Provider value={{
            count,
            setCount

        }}>
           {children}
        </CommonContext.Provider>

    )
}


export default CommonContext;