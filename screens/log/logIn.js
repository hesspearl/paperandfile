import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Fade from "../../components/Fade"



const Login = props => {
  return (
    <ImageBackground
      style={styles.contain}
      source={require("../../assets/splashJS.png")}
    blurRadius={2}
    >
   
      <Fade
     title="Login"
      style={styles.contain} />
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent:"center"
  }
});
export default Login;
