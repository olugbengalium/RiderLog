import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import PostListScreen from './postListScreen';
import PostDetailScreen from './postDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PostListScreen" component={PostListScreen} />
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
