import { Stack } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import * from "react-native-url-polyfill"
import { AppwriteProvider } from '@/contexts/AppwriteContext'
import { UserProvider } from "@/contexts/UserContext"

export default function RootLayout() {
    // console.warn("ROOTLAYOUTUPDATED")
    return (
        <AppwriteProvider>
            <UserProvider>
                <SafeAreaProvider>
                    <Stack screenOptions={{ headerShown: false, animation: "ios" }}>
                        <Stack.Screen name="index" />
                    </Stack>
                </SafeAreaProvider>
            </UserProvider>
        </AppwriteProvider>
    )
}
