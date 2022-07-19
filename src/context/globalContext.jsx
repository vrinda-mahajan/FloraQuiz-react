import { createContext, useContext, useReducer } from "react"
import { globalInitialState, globalReducer } from "reducer/globalReducer"

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [globalState,globalDispatch] = useReducer(globalReducer,globalInitialState);

    return ( 
        <GlobalContext.Provider value={{globalState,globalDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)