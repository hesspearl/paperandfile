import React from 'react'
import { TextInput, StyleSheet } from 'react-native';
import Color from "../../styles/Colors"
const InputTxt= props =>{
return (

    <TextInput
    {...props}
    onChangeText={props.changeText}
    value={props.value}
    returnKeyType={props.returnKeyType}
    onEndEditing={props.onEndEditing}
       style={{...styles.textInputDesign , ...props.style}}
       />

)
}

const styles= StyleSheet.create({
    textInputDesign: {
        backgroundColor:Color.trans,
        width: 200,
        height: 50,
        overflow: "hidden",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 1,
        borderRadius: 30,
        marginTop: 7,
       padding:10,
       fontSize:15,
      }

})
export default InputTxt;