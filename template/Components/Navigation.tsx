import React from 'react';
import { Button, View } from 'react-native';
import { Pages } from '../Tools';

type Props = {
    page: Pages,
    setPage: React.Dispatch<React.SetStateAction<Pages>>
};

const Navigation: React.FC<Props> = ({ page, setPage }): JSX.Element => {
    return (
        <View>
            <Button title="Control" onPress={() => setPage(Pages.CONTROL)} />
            <Button title="Docs" onPress={() => setPage(Pages.DOCS)} />
            <Button title="Data" onPress={() => setPage(Pages.DATA)} />
        </View>
    );
}

export default Navigation;