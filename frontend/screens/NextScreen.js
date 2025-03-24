import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

const { width, height } = Dimensions.get('window');

const NextScreen = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({ SpaceGrotesk_700Bold });

  if (!fontsLoaded) {
    return null; // Prevents rendering until font is loaded
  }

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.skip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Image at the Top */}
      <Image 
        source={require('../assets/next-image.png')} 
        style={styles.image}
        resizeMode="contain"  
      />

      {/* Text Below Image */}
      <Text style={styles.text}>Start Your Journey Now</Text>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Sign In / Up Button */}
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={() => navigation.navigate('Login')}  // Now goes to Login page
        >
          <Text style={styles.signInButtonText}>Sign In / Up</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center' 
  },

  skip: { 
    position: 'absolute', 
    top: 40, 
    left: 20, 
    zIndex: 10 
  },

  skipText: { 
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold' 
  },

  image: { 
    width: width,  
    height: height * 0.5,  
    marginTop: 0,  
  },

  text: { 
    fontSize: 28, 
    fontFamily: 'SpaceGrotesk_700Bold', 
    color: 'black',  
    textAlign: 'center', 
    marginTop: 20  
  },

  buttonsContainer: { 
    alignItems: 'center', 
    width: '100%', 
    marginTop: 40, // Moves buttons slightly down
  },

  signInButton: { 
    backgroundColor: '#AE251F', 
    paddingVertical: 15, 
    paddingHorizontal: 80, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20
  },

  signInButtonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  backButton: { 
    backgroundColor: '#F0F0F0',  
    paddingVertical: 15, 
    paddingHorizontal: 80, 
    borderRadius: 10, 
    alignItems: 'center' 
  },

  backButtonText: { 
    color: 'black', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default NextScreen;
