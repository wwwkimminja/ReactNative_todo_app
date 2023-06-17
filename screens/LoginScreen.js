import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import ListIcon from '../assets/list.svg'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth()

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user', user);
    } catch (error) {
      console.log(error.message);
    }

  }

  const handleLogin=async()=>{
    
  }

  return (
    <View style={styles.container}>
      <ListIcon />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="pass word"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,

  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  }

})