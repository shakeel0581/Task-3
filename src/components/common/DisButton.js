import React,{useContext} from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const  DisButton = ({title, onPressButton, icon}) => {
    return(
        <> 
            <View style={styles.button}>
                <View style={styles.va}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        height:40,
        alignSelf:'stretch',
        borderRadius:2,
        borderRadius:5,
        backgroundColor:'#d5d5d5',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize:16,
        fontWeight:'600',
        fontWeight:'bold',
        color:'gray',
      },
      va: {
          flex:1,
          alignItems: 'center',
      justifyContent: 'center',
        },
});
export { DisButton }  ;
