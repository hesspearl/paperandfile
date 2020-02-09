import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogInput from "../logComp/inputs"
import Colors from "../../styles/Colors";
import Logbtn from "../logComp/logBtn"

const Layout = props => {
  return (
    <View style={{ ...styles.logStyle, ...props.style }}>
      <Text style={styles.Title}>{props.title} </Text>
      <LogInput
        onInputChange={props.onInputChange}
      />
      <Logbtn>
        {props.btn}
      </Logbtn>
    </View>
  );
};

const styles = StyleSheet.create({
  logStyle: {
    height: "70%",
    backgroundColor: Colors.trans2,
    alignItems: "center",
justifyContent:"center",
  //  marginTop: 30,
  //  marginBottom: 15,
  //  paddingTop: 50,

    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "grey",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1
  },
  Title: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily:"anton",
    color:Colors.whiteTrans,
    textShadowRadius:100,
    textShadowColor:"black",
  marginBottom:20,
 

   
    
  }
});
export default Layout;
