import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

/*
Buttons
    - Turn on LED
    - Moving
        - Input
        - Forward
        - Backward
        - Right
        - Left
    - Moving Servo
        - Input with Angle Degree (Slider)
    - Scan and Retrieve Data
*/

type ModuleButton = {
    title: string;
    fun: () => void;
};

type ModuleSlider = {
    title: string;
    min: number;
    max: number;
    fun: () => void;
};

type Module = {
    name: string;
    inputs: Array<ModuleButton | ModuleSlider>;
};

const modules: Array<Module> = [
    {
        name: "Stepper Motor",
        inputs: [
            {
                title: "Power Control",
                min: 0,
                max: 100,
                fun: () => {
                    console.log('');
                }
            },
            {
                title: "Submit",
                fun: () => {
                    console.log("Submit");
                }
            }
        ]
    },
    {
        name: "Servo 1",
        inputs: [
            {
                title: "Angle",
                min: 0,
                max: 90,
                fun: () =>{
                    console.log('');
                }
            },
            {
                title: "Submit",
                fun: () => {
                    console.log("Submit");
                }
            }
        ]
    }
];

const Control = () => {
    useEffect(() => {
        console.log(modules);
    }, [])
    
    return (
        <View>
            {/* Directional Control */}
            <View>

            </View>
            {/* LED Control */}
            <View>

            </View>
            {/* 
            Minor Machines 
                - Servos
                - Stepper Motors
                - Other Arduino Modules
            */}
            <View>

            </View>
            {/* Retrieve Data */}
            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backfaceVisibility: 'hidden'
    }
});

export default Control;