import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageDisplay from '../Components/ImageDisplay';
import Loading from '../Components/Loading';

type Data = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
};

const Home = () => {
    const [data, setData] = useState<Data>(); 

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=uDl05citWKgFDR4HXEZfOMYbQip2TgJHdUaeFIcB')
            .then(res => res.json())
            .then((data: Data) => setData(data))
            .catch((e) => {
                Alert.alert('Error Loading Home Page');
            });
    }, []);

    return (
        <View>
            {
                data ? 
                <ScrollView>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text>{data.date}</Text>
                    <ImageDisplay url={data.url} width={300} height={300} />
                    <Text>{data.explanation}</Text>
                    <Text>Credit to {data.copyright}</Text>
                </ScrollView>
                : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    }
});

export default Home;