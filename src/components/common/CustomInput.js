import React,{useContext} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInput = ({keyboardType,placeholder,term,onTermChange,secureTextEntry,Error,hideShowPassword,pressIcon,LeftIcon}) => {
    
    return(
        <>
        <View style={{flexDirection:'row',alignItems: 'center'}}> 
            {LeftIcon?<Image style={styles.inputIcon} source={{uri: LeftIcon}}/>: <View style={styles.inputIcon}/>}
            <View style={{flex:1}}>
            <TextInput 
                label={placeholder}
                style={styles.input(Error)}
                autoCorrect={false}
                value={term}
                keyboardType={keyboardType}
                onChangeText={onTermChange}
                secureTextEntry={hideShowPassword}
                error={Error}
                right={secureTextEntry &&  
                    <TextInput.Icon
                      name={hideShowPassword ?'eye-off':'eye'}
                      onPress={pressIcon}
                    />
                  }
            />
            {Error ? <Text style={styles.error}>{Error}</Text>: null}
            </View>
        </View>
        
        </>
    );
}
const styles = StyleSheet.create({
   
    input: (error) =>  ({
        fontSize:14,
        height:50,
        width:'100%',
        backgroundColor:'#f5f5f5',
        color: error ? '#dc3545' : '#000'
    }),
    error: {
        fontSize:12,
        fontWeight:'bold',
        color:'#dc3545'
    },
    inputIcon:{
      width:30,
      height:30,
      alignItems: 'center',
      marginHorizontal:10
    },
});

export { CustomInput };