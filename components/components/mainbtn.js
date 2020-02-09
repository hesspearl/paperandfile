import React from "react";
import { Text,
     StyleSheet,
      View,
       TouchableOpacity,
       TouchableNativeFeedback ,
        Platform } from "react-native";


const MainButton = props => {
let ButtonComponent=TouchableOpacity;
if (Platform.OS==='android'&& Platform.Version>=21){
  ButtonComponent=TouchableNativeFeedback
}
  return (
    <View style={{...styles.btnWrap, ...props.style}}>
    <ButtonComponent onPress={props.onPress}>
      <View style={{...styles.btnContainer, ...props.btnStyle}}>
        <Text style={styles.btn}>{props.children}</Text>
      </View>
    </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnWrap:{
    borderColor:"#6D6E71",
    borderWidth:1,
   borderRadius:11,
    overflow:'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
  },
    btnContainer: {
    
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    height:100
  },
  btn: {
    fontWeight:'bold',
    fontSize: 30,
    color: "black",
    fontFamily:"anton"
  }
});

export default MainButton;