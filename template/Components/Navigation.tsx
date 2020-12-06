import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Pages } from '../Tools/Pages';

type Props = {
    page: Pages,
    setPage: React.Dispatch<React.SetStateAction<Pages>>
};

const Navigation: React.FC<Props> = ({ page, setPage }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if(page == Pages.HOME) {
            setText("Go To Control Center")
        } else if(page == Pages.CONTROL) {
            setText("Go To Home")
        } else {
            setText("Go to Home")
        }
    }, [page])
    
    const set = () => {
        if(page == Pages.HOME) {
            setPage(Pages.CONTROL)
        } else if(page == Pages.CONTROL) {
            setPage(Pages.HOME);
        } else {
            setPage(Pages.HOME);
        }
    };

     return (
        <View>
            <Text>Template Mars Rover</Text>
            <Button title={text} onPress={set} />
        </View>
    );
};

export default Navigation;