import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here we set our default username and passwords
    const defaultUsername = 'malam';
    const defaultPassword = 'malam';

    if (username === defaultUsername && password === defaultPassword) {
      Alert.alert('Login Successful');
    } 

    else if ( !username || !password ){
      Alert.alert('Username or Password cannot be empty');
    }

    else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <Text style= {{color: '#91408d',fontSize: 25, fontWeight: 'bold', margin: 15}}>Welcome! Engineer Jones,
      </Text>
      <Text style= {{fontSize: 20, fontStyle: 'italic', margin: 10}}> enter your login details below...</Text>
      
      <TextInput
        style={{ marginBottom: 20, padding: 15, borderWidth: 2, width: 300, borderRadius: 20}}
        placeholder="👨‍🔬  Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      
      <TextInput
        style={{ marginBottom: 20, padding: 15, borderWidth: 2, width: 300, borderRadius: 20 }}
        placeholder="🔐  Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#3279c9', padding: 10, borderRadius: 30, 
      marginTop: 20, width: 200}}>
        <Text style={{ color: 'pink', padding: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>👉🏻 Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;