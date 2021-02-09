import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';


const Dashboard = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#307ecc" barStyle='default' />
        <Text>Dashboard Screen</Text>
    </View>
  );
};

export default Dashboard;

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