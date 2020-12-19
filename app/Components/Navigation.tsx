import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Pages } from '../Tools';

interface Props {
    pages: Pages,
    setPages: React.Dispatch<React.SetStateAction<Pages>>
}

const Navigation: React.FC<Props> = ({ pages, setPages }) => {
    return (
        <View style={styles.view}>
            <Button title="Home" onPress={() => setPages(Pages.Home)} />
            <Button title="Demo" onPress={() => setPages(Pages.Design)} />
            <Button title="Control" onPress={() => setPages(Pages.Control)} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        margin: 5,
        backgroundColor: 'blue',
        borderRadius: 10
    }
});

export default Navigation;