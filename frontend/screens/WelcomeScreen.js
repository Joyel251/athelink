import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({ SpaceGrotesk_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/welcome-image.png')} style={styles.backgroundImage}>
      {/* Skip Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.skip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* Welcome Text */}
        <Text style={styles.text}>Welcome to the place where passion meets performance</Text>

        {/* Sports Icons Row */}
        <View style={styles.iconsContainer}>
          <Image source={require('../assets/icon1.png')} style={[styles.icon, styles.firstIcon]} />
          <Image source={require('../assets/icon2.png')} style={[styles.icon, styles.secondIcon]} />
          <Image source={require('../assets/icon3.png')} style={styles.icon} />
          <Image source={require('../assets/icon4.png')} style={styles.icon} />
          <Image source={require('../assets/icon5.png')} style={[styles.icon, styles.lastIcon]} />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Next')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { 
    flex: 1, 
    width: width, 
    height: height, 
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  },

  skip: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  skipText: { fontSize: 16, color: 'black', fontWeight: 'bold' },

  contentContainer: { 
    alignItems: 'center', 
    width: '100%', 
    paddingBottom: height * 0.08, 
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingVertical: 30 
  },

  text: { 
    fontSize: 28, 
    fontFamily: 'SpaceGrotesk_700Bold', 
    textAlign: 'center', 
    color: 'black', 
    lineHeight: 36, 
    marginBottom: 20, 
    paddingHorizontal: 20 
  },

  iconsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '90%',
    marginBottom: 30 
  },

  icon: { width: 40, height: 40 },
  secondIcon: { width: 35, height: 35, resizeMode: 'contain' },

  nextButton: { 
    backgroundColor: '#AE251F', 
    paddingVertical: 15, 
    paddingHorizontal: 60, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  
  nextButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default WelcomeScreen;
