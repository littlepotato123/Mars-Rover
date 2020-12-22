import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

/*
Strucuture
    - Connect
        - Alert if success
        - Reload App if fail
    - Buttons
        - BleManager.write('');
*/

const Control = () => {
    useEffect(() => {
        console.log("Hi");
    }, [])

    return (
        <View>
            <Text>Control</Text>
        </View>
    );
}

export default Control;