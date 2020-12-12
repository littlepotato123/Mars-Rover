import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Loading from '../../Components/Loading';

type Props = {
    url: string;
}

const ImageDisplay: React.FC<Props> = ({ url }) => {
    const [display, setDisplay] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setDisplay(
            <Image 
                style={{ width:500, height: 500}}
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

export default ImageDisplay;