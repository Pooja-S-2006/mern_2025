import {createContext} from 'react';

export const Context=createContext();

export const UserContext = ({children}) => {
    const user = {name: 'Pooja',phn:'9873827489'}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
export default Context;