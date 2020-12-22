import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

/*
Components
    - Directional Movement
        - Legs
        - Wheels
    - Vision
        - Get Data
        - Enable and Disable Path Finding
    - Claw
        - Change Vertical Incline Angle (Slider)
        - Open Claw / Close Claw
*/

// Types for Fetches
type Camera = {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
};

type Rover = {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
};

type Photo = {
    id: number;
    sol: number;
    camera: Camera;    
    img_src: string;
    earth_date: string;
    rover: Rover;
}

type Data = {
    photos: Array<Photo>;
}

const Demo = () => {
    const [data, setData] = useState<Photo | null>(null);
    const [vision, setVision] = useState(true);
    const [angle, setAngle] = useState<number>(0);

    const random = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        
    })

    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Directional Movement</Text>
                <View>
                    <View style={styles.center}>
                        <Button color="#686d76" title="Move Forward" onPress={() => Alert.alert('Moving Forward')} />
                    </View>
                    <View style={styles.box}>
                        <Button color="#686d76" title="Move Left" onPress={() => Alert.alert('Moving Left')} />
                        <Button color="#686d76" title="Move Right" onPress={() => Alert.alert('Moving Right')} />
                    </View>
                    <View style={styles.center}>
                        <Button color="#686d76" title="Move Backward" onPress={() => Alert.alert('Moving Backward')} />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.title}>Claw Control</Text>
                <View style={styles.slider}>
                    <Text>{angle}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={360}
                        value={angle}
                        step={30}
                        style={{ width: '80%' }}
                        onValueChange={(e) => {
                            setAngle(e);
                        }}
                    />
                    <Button color="#686d76" title="Set" onPress={() => Alert.alert(`Stepper Motor set to ${angle} Degrees`)} />
                </View>
                <View style={styles.box}>
                    <View><Button title="Close Claw" color="#686d76" onPress={() => {
                        Alert.alert('Servo at 0 Degrees');
                    }} /></View>
                    <View><Button color="#686d76" title="Open Claw" onPress={() => {
                        Alert.alert('Servo at 90 Degrees')
                    }} /></View>
                </View>
            </View>
            <View>
                {
                    vision ? <View><Button color="#686d76" title="Disable" onPress={() => {
                        Alert.alert('Disabling Vision and Pathfinding');
                        setVision(false);
                    }} /></View> : <View><Button color="#686d76" title="Enable" onPress={() => {
                        Alert.alert('Enabled Pathfinding and Vision');
                        setVision(true);
                    }} /></View>
                }
                <Text style={styles.title}>Vision</Text> 
                <Button title="Recieve Data" color="#686d76" onPress={() => Alert.alert('Fetching')} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        paddingVertical: 10
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    slider: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
});

export default Demo;