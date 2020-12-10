import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Results } from '../../Tools';

const Data = () => {
    const [data, setData] = useState<Results | null>(null);
    
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=uDl05citWKgFDR4HXEZfOMYbQip2TgJHdUaeFIcB')
            .then(res => res.json())
            .then((data: Results) => setData(data));
    }, []);

    return (
        <View>
            <Text>{data?.title}</Text>
        </View>
    );
}

export default Data;