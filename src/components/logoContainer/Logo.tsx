import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Style';
import LogoImg from '../../../assets/LogoScree.png' 

const Logo = () => {
  return (
    <>
      <Image
        source={LogoImg}
        style={{
            marginTop:35,
            width:139,
            height:32
        }}
      />
    </>
  )
}

export default Logo