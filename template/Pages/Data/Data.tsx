import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Loading from '../../Components/Loading';
import { Results } from '../../Tools';
import ImageDisplay from './ImageDisplay';

const Data = () => {
    const [data, setData] = useState<Results | null>(null);
    
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=uDl05citWKgFDR4HXEZfOMYbQip2TgJHdUaeFIcB')
            .then(res => res.json())
            .then((data: Results) => setData(data));
    }, []);

    return (
        <View>
            {
                data ? 
                <View>
                    <Text>{data.date}</Text>
                    <Text>{data.explanation}</Text>
                    <Text>{data.title}</Text>
                    <ImageDisplay url={data.url} />
                </View>
                : <Loading />
            }
        </View>
    );
}

export default Data;