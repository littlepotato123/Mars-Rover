import React, { useState } from 'react';
import { Text, View } from 'react-native';

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
*/

const Control = () => {
    const [alert, setAlert] = useState<JSX.Element | null>(null);

    return (
        <View>
            {alert}
            <Text>Control</Text>
        </View>
    );
}

export default Control;