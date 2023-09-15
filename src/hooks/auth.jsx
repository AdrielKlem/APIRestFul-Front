import { createContext, useContext } from "react";

const AuthContext = createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{name: "Joao", email: "joao@email.com"}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthContext, AuthProvider, useAuth }