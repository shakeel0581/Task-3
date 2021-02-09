import React, {useState, useEffect} from 'react';
import {StatusBar, TextInput, Text, StyleSheet,View,TouchableHighlight,
  Image,} from 'react-native';

const Login = (props) => {
  const [no, setNo] = useState('');
  
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#f5f5f5' barStyle="dark-content" />
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/call-png-image-5-1-Transparent-Images.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="+92 3001234567"
              value={no}
              underlineColorAndroid='transparent'
              onChangeText={(no) => setNo(no)}/>
        </View>
        <TouchableHighlight 
          style={[styles.buttonContainer, styles.loginButton]} 
          onPress={() =>
            props.navigation.navigate('CodeConfirm')
          }
        >
          <Text style={styles.loginText}>Verify Phone Number</Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:5,
  },
  loginButton: {
    backgroundColor: "#1e81b0",
  },
  loginText: {
    color: 'white',
  }
});


export default (Login);