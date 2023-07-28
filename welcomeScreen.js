import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleLoginButtonPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handlePostListButtonPress = () => {
    navigation.navigate('PostListScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This App was Crafted by Engr. Famous using React Native</Text>
      <Text style={{fontStyle: 'italic', fontSize: 18, padding: 10}}>You can choose to login or view posts</Text>
      <TouchableOpacity onPress={handleLoginButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePostListButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>View Posts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#2d8ac4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 30,
    cornerRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WelcomeScreen;
