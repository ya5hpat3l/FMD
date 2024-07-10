import { Redirect, Slot } from "expo-router"
import { useUser } from "@/contexts/UserContext"

export default function(){
    // console.warn("SECURELAYOUTUPDATED")
    const { user } = useUser()
    
    if(!user){
        return <Redirect href="/" />
    }
    
    return <Slot />
}