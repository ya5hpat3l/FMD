// src/contexts/UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAppwriteClient } from '@/contexts/AppwriteContext'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const { client, account } = useAppwriteClient()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            if (client) {
                try {
                    const session = await account.getSession('current')
                    const userData = await account.get()
                    setUser(userData)
                    console.log("SETTING USER SESSION", userData)
                } catch (error) {
                    console.error('Error fetching user:', error)
                    setUser(null)
                } finally {
                    setLoading(false)
                    console.info("UPDATE from userContext", user, client)//remove this
                }
            }
        }
        fetchUser()
    }, [client])//TEST

    function logout(){
        account.deleteSession("current").then(resp => {
            setUser(null)
        })
        .catch(console.error)
        .finally(() => console.log("LOGOUT DONE"))
    }

    return (
        <UserContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </UserContext.Provider>
    );

};

export const useUser = () => {
    return useContext(UserContext)
}
