import { Alert, Button, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { signin, signup } from '../../store/actions/auth.action';

import Input from '../../components/input';
import { styles } from './styles'
import { useDispatch } from 'react-redux'

const Auth = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true);
    const [isNotValid, setIsNotValid] = useState(true);
    const emailInput = useRef();
    const passwordInput = useRef();

    const dispatch = useDispatch();
    const  handleAuth= () => {
        if(isLogin) {
            dispatch(signin(email, password))
        } else {
            dispatch(signup(email, password))
        }
    }

    const onchange = (value, type) => {
        if(type === 'email') {
            setEmail(value)
        }
        if(type === 'password') {
            setPassword(value)
        }

        if(emailInput.current.state.validate && passwordInput.current.state.validate) {
                setIsNotValid(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Registro'}</Text>
                <View style={styles.containerForm}>
                    <Input 
                        ref={emailInput}
                        label='Email' 
                        placeholder='Ingresa tu correo'
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        type='email'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onchange(value, 'email')}
                        maxLength={60}
                    />
                    <Input
                        ref={passwordInput}
                        style={styles.input}
                        label='Contraseña' 
                        placeholder="ingresa tu contraseña"
                        placeholderTextColor="#999"
                        type='password'
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeInput={(value) => onchange(value, 'password')}
                        value={password}
                        maxLength={20}
                    /> 
                </View>
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.linkText}>{isLogin ? '¿No tienes una cuenta? registrate' : '¿Ya tienes una cuenta?'}</Text>
                </TouchableOpacity>
                <Button title={isLogin ? 'Ingresar' : 'Registrar' } color='#2e78b7' onPress={() => handleAuth()} disabled={isNotValid} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;