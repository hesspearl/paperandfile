import React, {useState} from "react";
import { View, ImageBackground, StyleSheet, Text,TouchableOpacity } from "react-native";
import Fade from "../../components/logComp/Fade"
import Colors from "../../styles/Colors"


const Login = props => {
  const [inputs, setInputs] = useState();

  return (
    <ImageBackground
      style={styles.contain}
      source={require("../../assets/splashJS.png")}
    blurRadius={3}
    >
  
      <Fade
     onInputChange={setInputs}
     title="تسجيل الدخول"
      style={styles.contain}
      btn="دخول" />
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("signup")}>
      <View
      style={styles.txtView}>
      <Text
      style = {styles.text}>
        لا تملك حساب؟
      </Text>
      </View>
      </TouchableOpacity>
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
export default Login;
