import React from 'react'
import {  StyleSheet } from 'react-native';
import MainButton from "../components/mainbtn";
import Colors from "../../styles/Colors"

const LogButtons= props =>{
return (

        <MainButton 
        {...props}
        style={styles.button} 
        btnStyle={{...styles.btnStyle , ...props.btnStyle}}>
        {props.children}
        </MainButton>
     
)
}

const styles= StyleSheet.create({
    button: {
        width: 350,
        margin: 10
      },
      btnStyle: {
        backgroundColor: Colors.whiteTrans,
        height: 70
      }
})
export default LogButtons;