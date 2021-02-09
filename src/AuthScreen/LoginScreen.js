import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { CustomInput, DisButton, CustomButton } from "../components/common";

export default function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIscorrect ] = React.useState(false);
  const [isCorrectP, setIscorrectP ] = React.useState(false);
  const [isCorrectB, setIscorrectB ] = React.useState(true);

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setIscorrect(true);
      setEmail(text);
      return false;
    }
    else {
      setEmail(text);
      setIscorrect(false);
    }
  }

  console.log(isCorrectP,isCorrectB,isCorrect)

  return (
    <View style={styles.loadingContainer}>
      <StatusBar backgroundColor='#f5f5f5' barStyle="dark-content" />
      <Text style={styles.title}>Login</Text>
      <CustomInput
      term={email}
      Error={isCorrect ? "Email is not Correct" :  null }
      onTermChange={(text) => {
        setIscorrectB(false);
        validate(text);
        
      }}
        placeholder="Email"
        LeftIcon='https://icon-library.com/images/users-icon-png/users-icon-png-3.jpg'
      />
      <View style={{margin:10}} />
      <CustomInput
        term={password}
        Error={password == '' && isCorrectP ? "Password is not Empty" :  null }
        onTermChange={(text) => {
          setPassword(text);
          setIscorrectP(true);
          setIscorrectB(false);
        }}
        hideShowPassword={true}
        placeholder="Password"
        LeftIcon='https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/password-512.png'
      />
      <View style={{margin:10}} />
      {isCorrect || password == '' || email == '' || isCorrectB ?
        <View style={{width:100}}>
          <DisButton title='Login'/>
        </View>  
        :
        <View style={{width:100}}>
          <CustomButton title='Login'
          onPressButton={() => props.navigation.navigate('OTPScreen')}
          />
        </View>
      }
      <View style={{margin:10}} />
      <Text onPress={() => props.navigation.navigate('Signup') } style={{alignSelf:'center'}}>Register ?</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  title: {
    fontSize: 34,
    fontWeight:'bold'
  }
});