import { Text, View, TouchableOpacity } from "react-native"
import { Link, Redirect, router } from "expo-router"
import { useUser } from "@/contexts/UserContext"
import { useAppwriteClient } from "@/contexts/AppwriteContext"
import { useEffect } from "react"
import DeviceInfo from 'react-native-device-info'


//UNINSTALL
// import * as BackgroundFetch from 'expo-background-fetch'
// import * as TaskManager from 'expo-task-manager'

export default function Home() {
    

    const { ID, database } = useAppwriteClient()
    const { user, setUser, logout } = useUser()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* <Text>Background location updates enabled.</Text> */}
            
            <TouchableOpacity onPressOut={e => alert("ok")} style={{backgroundColor: "black", padding: 20, borderRadius: 100}}>
                <Link href="/device-info">
                    <Text style={{color: "white"}}>Device Info</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity onPress={logout}><Text>Log out</Text></TouchableOpacity>
        </View>
    );
}