import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import MedicoIcon from '../../../assets/medicoIcon.png';
import DentistaIcon from '../../../assets/dentistaIcon.png';
import CabelereiroIcon from '../../../assets/cabelereiroIcon.png';
import PersonalIcon from '../../../assets/personalIcon.png';
import PetshopIcon from '../../../assets/petShopIcon.png';
import PilatesIcon from '../../../assets/pilatesIcon.png';
import ManicureIcon from '../../../assets/manicureIcon.png';
import NutriIcon from '../../../assets/nutriIcon.png';
import LavacarIcon from '../../../assets/lavacarIcon.png';
import { styles } from './Style';

interface ButtonData {
    id: string;
    icon: any;
    text: string;
    isPressed: boolean;
}

const GridHome = () => {
    const [buttonsData, setButtonsData] = useState<ButtonData[]>([
        { id: 'medico', icon: MedicoIcon, text: 'Médico', isPressed: true },
        { id: 'dentista', icon: DentistaIcon, text: 'Dentista', isPressed: true },
        { id: 'cabelereiro', icon: CabelereiroIcon, text: 'Cabelereiro', isPressed: true },
        { id: 'personal', icon: PersonalIcon, text: 'Personal', isPressed: true },
        { id: 'petshop', icon: PetshopIcon, text: 'Petshop', isPressed: true },
        { id: 'pilates', icon: PilatesIcon, text: 'Pilates', isPressed: true },
        { id: 'manicure', icon: ManicureIcon, text: 'Manicure', isPressed: true },
        { id: 'nutri', icon: NutriIcon, text: 'Nutricionista', isPressed: true },
        { id: 'lavacar', icon: LavacarIcon, text: 'Lavacar', isPressed: true },

    ]);

    const handlePressIn = (id: string) => {
        setButtonsData(prevButtons =>
            prevButtons.map(button =>
                button.id === id ? { ...button, isPressed: false } : button
            )
        );
    };

    const handlePressOut = (id: string) => {
        setButtonsData(prevButtons =>
            prevButtons.map(button =>
                button.id === id ? { ...button, isPressed: true } : button
            )
        );
    };

    return (
        <View style={styles.containerGrid}>
            {buttonsData.map(button => (
                <Pressable
                    key={button.id}
                    onPressIn={() => handlePressIn(button.id)}
                    onPressOut={() => handlePressOut(button.id)}
                    style={styles.containerItem}>
                    <View style={button.isPressed ? styles.imgContainer : styles.imgContainerPress}>
                        <Image
                            source={button.icon}
                            style={styles.img}
                        />
                    </View>
                    <Text style={styles.text}>{button.text}</Text>
                </Pressable>
            ))}
        </View>
    );
};

export default GridHome;
