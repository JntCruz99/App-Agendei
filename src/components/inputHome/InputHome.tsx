import { View, Text, TextInput, Image } from 'react-native'
import React,{useState} from 'react'
import {styles} from './Style'
import LocIcon from '../../../assets/locIcon.png'

const InputHome = () => {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Text 
      style={{
        fontSize:18,
        marginLeft:15
    }}
      >Agende os seus serviços</Text>
      <View style={[styles.inputContainer, { borderColor: isFocused ? 'black' : '#ECECEC' }]}>
        <Image source={LocIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Qual cidade você está?'
        underlineColorAndroid="transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}  
      />
      </View>
      
    </>
  )
}

export default InputHome