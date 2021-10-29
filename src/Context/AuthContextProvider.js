import React, { createContext } from 'react';
import useFirebase from '../Pages/Hooks/UseFirebase';


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProvider;