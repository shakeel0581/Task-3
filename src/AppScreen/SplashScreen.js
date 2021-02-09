import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';


const SplashScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#307ecc" barStyle='default' />
      <Image
        source={require('../../assets/images/demoLogo.png')}
        style={{width: '90%', resizeMode: 'contain',height:150}}
      />
      <ActivityIndicator
        animating={true}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    bottom: 80,
    position:'absolute'
  },
});