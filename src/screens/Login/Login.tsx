import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import styles from '../Login/Style';
import LoginInput from '../../components/loginInput/LoginInput';
import Logo from '../../components/logoContainer/Logo'
import FooterLogin from "../../components/footerLogin/FooterLogin";


export default function Home({ navigation }:any) {
    return (
        <View style={styles.appContainer}>
            <View>
                <Logo />
            </View>
            <View style={styles.inputContainer}>
                <LoginInput navigation={navigation}/>
            </View>

            <View style={styles.footerContainer}>
                <FooterLogin />
            </View>
            <StatusBar style="light" />
        </View>
    );
}
