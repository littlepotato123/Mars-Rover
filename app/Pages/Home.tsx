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
                <ScrollView style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.date}>{data.date}</Text>
                    <ImageDisplay url={data.url} width={300} height={300} />
                    <Text style={styles.explanation}>{data.explanation}</Text>
                    {
                        data.copyright ? <Text style={styles.credit}>Credit to {data.copyright}</Text> : <Text style={styles.credit}>Credit to NASA</Text>
                    }
                </ScrollView>
                : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    date: {
        fontSize: 14,
        textAlign: 'center',
    },
    explanation: {
        lineHeight: 30,
        fontSize: 15,
        textAlign: 'center'
    },
    credit: {
        paddingBottom: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    }
});

export default Home;