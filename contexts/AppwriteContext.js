// src/contexts/AppwriteContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client, Account, Databases, Storage, ID } from "react-native-appwrite";

const AppwriteContext = createContext();

export const AppwriteProvider = ({ children }) => {
    const [client, setClient] = useState(null);
    const [account, setAccount] = useState(null);
    const [database, setDatabase] = useState(null);
    const [storage, setStorage] = useState(null);

    useEffect(() => {
        if(!client){
            const appwriteClient = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
                .setProject('668548f3002b9686e02c')
                .setPlatform('xyz.yxsh.fmd')
            setClient(appwriteClient)
            const appwriteAccount = new Account(appwriteClient)
            const appwriteDatabase = new Databases(appwriteClient)
            const appwriteStorage = new Storage(appwriteClient)
            setAccount(appwriteAccount)
            setDatabase(appwriteDatabase)
            setStorage(appwriteStorage)
            console.info("APPWRITE CLIENT CREATED")
        }
    }, []);

    return (
        <AppwriteContext.Provider value={{client, account, database, storage, ID}}>
            {children}
        </AppwriteContext.Provider>
    )
}

export const useAppwriteClient = () => {
    return useContext(AppwriteContext);
}
