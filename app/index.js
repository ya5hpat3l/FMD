import { Redirect } from "expo-router"
import { useUser } from "@/contexts/UserContext"
import BouncingDots from "@/components/BouncingDots"
import { View, Text } from "react-native"
import DeviceInfo from 'react-native-device-info'


export default function Index() {

    const { user, loading } = useUser()

    if (loading) {
        return <BouncingDots />
    }

    if (!user) {
        return <Redirect href="/auth/login" />
    }
    else {
        return <Redirect href="/home" />
    }
}
