import React from 'react';
import { Text, View } from 'react-native';
import { Pages } from '../Tools';

interface Props {
    pages: Pages,
    setPages: React.Dispatch<React.SetStateAction<Pages>>
}

const Navigation: React.FC<Props> = ({ pages, setPages }) => {
    return (
        <View>
            <Text>Navigation</Text>
        </View>
    );
}

export default Navigation;