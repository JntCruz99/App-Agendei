import { View, Text, Image } from 'react-native';
import React from 'react';
import MedicoIcon from '../../../assets/medicoIcon.png';
import DentistaIcon from '../../../assets/dentistaIcon.png';
import CabelereiroIcon from '../../../assets/cabelereiroIcon.png';
import PersonalIcon from '../../../assets/personalIcon.png';
import PetshopIcon from '../../../assets/petShopIcon.png';
import PilatesIcon from '../../../assets/pilatesIcon.png';
import ManicureIcon from '../../../assets/manicureIcon.png';
import NutriIcon from '../../../assets/nutriIcon.png';
import LavacarIcon from '../../../assets/lavacarIcon.png';
import { styles } from './Style'


const GridHome = () => {
    return (
        <View style={styles.containerGrid}>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={MedicoIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Medico</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={DentistaIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Dentista</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={CabelereiroIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Cabelereiro</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={PersonalIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Personal</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={PetshopIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Petshop</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={PilatesIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Pilates</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={ManicureIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Manicure</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={NutriIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >Nutricionista</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imgContainer}>
                    <Image
                        source={LavacarIcon}
                        style={styles.img}
                    />
                </View>
                <Text
                    style={styles.text}
                >LavarCar</Text>
            </View>
        </View>
    )
}

export default GridHome