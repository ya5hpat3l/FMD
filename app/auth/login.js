import { Link, Redirect } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useAppwriteClient } from "@/contexts/AppwriteContext";
import { useUser } from "@/contexts/UserContext"


export default function Login(){
    // console.warn("AUTHLOGINUPDATED")

    const { user, setUser } = useUser()

    if(user){
        return <Redirect href="/" />
        // router.push("/index")
        // router.navigate("/")
    }


    const [email, setEmail] = useState("test@test.local")
    const [pwd, setPwd] = useState("testtest")

    const {client, account} = useAppwriteClient()

    function loginAction(e){
        // alert("login")
        console.log("logging in")
        account.createEmailPasswordSession(email, pwd)
            .then(ud => {
                console.info(ud)
                setUser(ud)
            })
            .catch(err => {
                console.error("login error:", err)
            })
            .finally(() => console.log("DONE LOGGIN IN"))
    }

    return (
        <View style={{...style.view}}>
            <View style={{
                flexDirection: "column",
                width: "100%",
                // backgroundColor: "red"
            }}>
                <TextInput
                    style={{
                        borderWidth: 2,
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        marginHorizontal: 30,
                        marginBottom: 15,
                        borderRadius: 5,
                        fontSize: 16,
                        fontWeight: "400"
                    }}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email"
                    textContentType="email"
                    keyboardAppearance="email"
                    inputMode="email"
                    placeholder="Email"
                    placeholderTextColor={"black"}
                />
                <TextInput
                    style={{
                        borderWidth: 2,
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        marginHorizontal: 30,
                        marginBottom: 15,
                        borderRadius: 5,
                        fontSize: 16,
                        fontWeight: "400"
                    }}
                    value={pwd}
                    onChangeText={setPwd}
                    placeholder="Password"
                    placeholderTextColor={"black"}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "black",
                        borderRadius: 100,
                        padding: 10,
                        marginHorizontal: 30,
                        marginVertical: 10,
                        alignItems: "center"
                    }}
                    onPress={loginAction}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "800"
                        }}
                    >Login</Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    <Link href="auth/signup"><Text>Sign Up</Text></Link>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})