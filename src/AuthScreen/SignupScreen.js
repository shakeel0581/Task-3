import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { CustomInput, DisButton, CustomButton } from "../components/common";

export default function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');

  const [isCorrect, setIscorrect ] = React.useState(false);
  const [isCorrectP, setIscorrectP ] = React.useState(false);

  const [isCorrectB, setIscorrectB ] = React.useState(true);
  const [isCorrectl, setIscorrectl ] = React.useState(false);
  const [isCorrectf, setIscorrectf ] = React.useState(false);

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

  console.log(isCorrectP,isCorrectB,isCorrect,isCorrectl,isCorrectf)

  return (
    <View style={styles.loadingContainer}>
      <StatusBar backgroundColor='#f5f5f5' barStyle="dark-content" />
      <Text style={styles.title}>Register</Text>
      <CustomInput
      term={username}
      onTermChange={(text) => setUsername(text)}
        placeholder="Username"
        LeftIcon='https://icon-library.com/images/users-icon-png/users-icon-png-3.jpg'
      />
      <CustomInput
      term={fName}
      Error={fName == '' && isCorrectf ? "Fienld is required" :  null }
      onTermChange={(text) => {
        setIscorrectf(true);
        setFname(text);
      }}
        placeholder="First name"
        LeftIcon=''
      />
      <CustomInput
      term={lName}
      Error={lName == '' && isCorrectl  ? "Fienld is required" :  null }
      onTermChange={(text) => {
        setIscorrectl(true);
        setLname(text);
        
      }}
        placeholder="Last name"
        LeftIcon=''
      />
      <CustomInput
      term={email}
      Error={isCorrect ? "Email is not Correct" :  null }
      onTermChange={(text) => {
        setIscorrectB(false);
        validate(text);
        
      }}
        placeholder="Email"
        LeftIcon='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png'
      />
      <View style={{margin:10}} />
      <CustomInput
        term={password}
        Error={password == '' && isCorrectP ? "Password is not Empty": password.length < 8 && isCorrectP ? "Password must be greater than 6 characters" :  null }
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

      {password.length < 8 || isCorrect || password == '' || email == '' || lName == '' || fName == '' || isCorrectB ?
        <View style={{width:100}}>
          <DisButton title='Login'/>
        </View>  
        :
        <View style={{width:100}}>
          <CustomButton
           title='Register'
           onPressButton={() => props.navigation.navigate('OTPScreen')}
           />
        </View>
      }
      <View style={{margin:10}} />
      <Text onPress={() => props.navigation.navigate('Login') } style={{alignSelf:'center'}}>Login ?</Text>      
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