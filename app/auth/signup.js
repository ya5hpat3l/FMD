import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Link } from "expo-router";

export default function Signup(){
    // console.warn("AUTHSIGNUPUPDATED")
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
                    placeholder="Password"
                    placeholderTextColor={"black"}
                    secureTextEntry
                />
                <TouchableOpacity style={{
                    backgroundColor: "blue",
                    borderRadius: 100,
                    padding: 10,
                    marginHorizontal: 30,
                    marginVertical: 10,
                    alignItems: "center"
                }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "800"
                        }}
                    >Sign Up</Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    <Link href="auth/login"><Text>Login</Text></Link>
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