import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import colors from '~configs/ui/colors';

const Loader = (props) => {
    const { visible } = props;

    if (visible)
        return (
            <Overlay testID="loader" isVisible={visible} >
                <ActivityIndicator  size="large" color={colors.darkGrey}/>
            </Overlay>
        );
    return <></>
};

export default Loader
