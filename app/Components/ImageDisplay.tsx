import React from 'react';
import { Image, View } from 'react-native';

interface Props {
    url: string;
    width: number;
    height: number;
};

const ImageDisplay: React.FC<Props> = ({ url, width, height }) => {
    return (
        <View>
            <Image
                source={{ uri: url }}
                style={{ width: width, height: height, alignSelf: 'center', margin: 10, padding: 10 }}
            />
        </View>
    );
}

export default ImageDisplay;