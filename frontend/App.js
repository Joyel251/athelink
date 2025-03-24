import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ✅ Ensure all screens are correctly imported
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import NextScreen from './screens/NextScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import AdditionalProfileScreen from './screens/AdditionalProfileScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import PostDetails from './screens/PostDetails';
import OpportunitiesScreen from './screens/OpportunitiesScreen'; 
import MessagesScreen from './screens/messageScreen';
import ProfileScreen from './screens/profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
        <Stack.Screen name="AdditionalProfileScreen" component={AdditionalProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Opportunities" component={OpportunitiesScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="profiles" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
