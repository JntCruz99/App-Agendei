import { View, Text, TextInput, Pressable, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style';
import { useForm, Controller } from "react-hook-form"
import warnIncon from '../../../assets/warn-icon.png'




function LoginInput({ navigation }: any) {
  const [buttonPress, setButtonPress] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  })
  const onSubmit = (data: any) => {
    setButtonPress(false);
    navigation.navigate('Home');
    /*
    if (data.email === 'jonatascruz.99@gmail.com' && data.senha === 'jonatas123') {

      navigation.navigate('Home');

    } else {
      Alert.alert(
        'Credenciais Invalidas',
        'Email ou senha são invalidas',
        [
          {
            text: 'OK'
          },
        ],
        { cancelable: false }
      );
    }
    */
  }

  const handlePressOut = () => {
    setButtonPress(true);
  };

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="senha"
        defaultValue=""
      />
      {(errors.senha || errors.email) &&
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 7
          }}
        >
          <Image
            source={warnIncon}
            style={{
              width: 32,
              height: 32,
            }}
          />
          <Text
            style={{
              color: 'red',
            }}
          >Preencha todos os campos</Text>

        </View>

      }
      <Pressable
        style={buttonPress ? styles.button : styles.buttonPress}
        onPressIn={handleSubmit(onSubmit)}
        onPressOut={handlePressOut}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }} >Acessar</Text>
      </Pressable>
    </>
  )
}

export default LoginInput