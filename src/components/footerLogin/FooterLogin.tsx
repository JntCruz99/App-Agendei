import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style';

const FooterHome = () => {
    const [buttonPress, setButtonPress] = useState(true);

    const handlePressIn = () => {
        setButtonPress(false);
    };

    const handlePressOut = () => {
        setButtonPress(true);
    };
    return (
        <>
            <Pressable
                style={buttonPress? styles.footerContainer : styles.footerContainerPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                >
                <Text style={{
                    textAlign: 'center',
                    color: '#A0A0A0'
                }}>Não tenho uma conta. Toque para criar uma agora.</Text>
            </Pressable>
        </>
    )
}

export default FooterHome