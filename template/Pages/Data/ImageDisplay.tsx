import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Loading from '../../Components/Loading';

type Props = {
    url: string;
}

const ImageDisplay: React.FC<Props> = ({ url }) => {
    const [display, setDisplay] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setDisplay(
            <Image 
                style={styles.img}
                source={{ uri: url }}
            />
        )
    }, [])

    return (
        <View>
            {
                display ? display : <Loading />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '200px',
        height: '200px'
    }
});

export default ImageDisplay;