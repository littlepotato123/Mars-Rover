import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Text, View } from 'react-native';
import { connect, getBondedPeripherals, Peripheral } from 'react-native-ble-manager';
import Loading from '../Components/Loading';

const Control = () => {
    const [device, setDevice] = useState<Peripheral | null>(null);

    const requestAccess = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: "Request Coarse Location",
                message: "Enable for Bluetooth",
                buttonPositive: "Ok",
                buttonNegative: "Cancel"
            }
        );
        if(granted == PermissionsAndroid.RESULTS.GRANTED) {
            const next = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Request Fine Location",
                    message: "Enable for Bluetooth",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancel"
                }
            )
            if(next == PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Granted'); 
            }
        }    
    }

    useEffect(() => {
        requestAccess();
        getBondedPeripherals()
            .then((devices) => {
                devices.map(device => {
                    if(device.name == "HC-06") {
                        connect(device.id);
                        setDevice(device);
                        console.log('Device Connected and Stored');
                    }
                })
            }).catch((err) => {
                Alert.alert('Something wrong while Connecting')
            });
    }, []);

    return (
        <View>
            <Text>Control</Text>
            {
                device ? 
                <View>
                    <Text>Device Info</Text>
                    <Text>{device.name}</Text>
                    <Text>{device.id}</Text>
                    <Text>{device.rssi}</Text>
                </View> : <Loading />
            }
        </View>
    );
}

export default Control;