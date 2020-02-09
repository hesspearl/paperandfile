import React, {useState} from "react";
import { View, ImageBackground, StyleSheet, Text,TouchableOpacity } from "react-native";
import Fade from "../../components/logComp/Fade"
import Colors from "../../styles/Colors"
import Inputs from "../../components/components/Inputs"


const Signup = props => {
  const [inputs, setInputs] = useState();

  return (
    <ImageBackground
      style={styles.contain}
      source={require("../../assets/splashJS.png")}
    blurRadius={3}
    >
    <Inputs/>
  
      <Fade
     onInputChange={setInputs}
     title="انشاء حساب"
      style={styles.contain}
      btn="ارسال" />
      
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent:"center"
  },
  text:{
    color:"black",
    fontSize:20,
    fontWeight:"bold"

  },
  txtView:{
  
    alignItems:'center',

 
  }
});
export default Signup;