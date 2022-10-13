import React, {createContext, useState} from 'react'

const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [user, setUser] = useState({})
    const [individualEvent, setIndividualEvent] = useState({})

    return(
        <AuthContext.Provider value= {{
            user, setUser, individualEvent, setIndividualEvent 
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext