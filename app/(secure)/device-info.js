import { Text, View, TouchableOpacity } from "react-native"
import { Link, Redirect, router } from "expo-router"
import { useUser } from "@/contexts/UserContext"
import { useAppwriteClient } from "@/contexts/AppwriteContext"
import { useEffect, useState } from "react"
import DeviceInfo from 'react-native-device-info'

export default function DeviceInfoScreen() {

    const [info, setInfo] = useState()

    // console.log(DeviceInfo)
    
    useEffect(() => {
        async function x(){
            let info = {}
            info.battery = await DeviceInfo.getBatteryLevel() * 100
            info.carrier = await DeviceInfo.getCarrier()
            info.brand = await DeviceInfo.getBrand()
            info.model = await DeviceInfo.getModel()
            info.deviceid = await DeviceInfo.getDeviceId()
            info.devicename = await DeviceInfo.getDeviceName()
            info.sn = await DeviceInfo.getSerialNumber()
            setInfo(info)
        }
        x()
    }, [])
    
    if(!info) return null //loading state
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>battery: {info.battery}</Text>
            <Text>carrier: {info.carrier}</Text>
            <Text>brand: {info.brand}</Text>
            <Text>Model: {info.model}</Text>
            <Text>Device Id: {info.deviceid}</Text>
            <Text>Device Name: {info.devicename}</Text>
            <Text>Device S/N: {info.sn}</Text>
        </View>
    );
}