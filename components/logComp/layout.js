import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogInput from "../logComp/inputs"
import Colors from "../../styles/Colors";

const Layout = props => {
  return (
    <View style={{ ...styles.logStyle, ...props.style }}>
      <Text style={styles.Title}>{props.title} </Text>
      <LogInput/>
    </View>
  );
};

const styles = StyleSheet.create({
  logStyle: {
    height: "70%",
    backgroundColor: "rgba(0,0,0,0)",
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
    color:"rgba(255,255,255, 0.3)",
    textShadowRadius:10,
    textShadowColor:"black"

   
    
  }
});
export default Layout;
