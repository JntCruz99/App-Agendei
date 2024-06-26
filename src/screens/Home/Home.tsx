import { View, Text } from 'react-native';
import React from 'react';
import Logo from '../../components/logoContainer/Logo';
import styles from '../Home/Style'
import InputHome from '../../components/inputHome/InputHome';
import GridHome from '../../components/gridHome/GridHome';
import Tabs from '../../components/tabs/Tabs';

const Home = () => {
  return (
    <View >
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <InputHome />
      </View>
      
        <GridHome />
      <Tabs></Tabs>
    </View>
  )
}

export default Home