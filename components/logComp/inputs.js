import React, { useReducer, useEffect , useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import InputTxt from "../components/Inputs";


const FORM_UPDATE = "FORM_UPDATE";
const INPUT_BLUR = "INPUT_BLUR";

const Reducer = (state, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      const updateValues = {
        ...state.inputValues,
        [action.input]: action.value
      };

      const updatedValidities = {
        ...state.Validities,
        [action.input]: action.isValid
      };

     

      let formIsValid = true;

      for (let key in updatedValidities) {
        formIsValid = formIsValid && updatedValidities[key];
        
        
      }

      return {
         
        inputValues: updateValues,
        Validities: updatedValidities,
        isValid: formIsValid
      };

    case INPUT_BLUR:
      return { ...state, touched: true };
  }

  return state;
};

const LogInputs = props => {
  const [stateInput, dispatch] = useReducer(Reducer, {
    inputValues: {
      email: "",
      password: ""
    },
    Validities: {
      email: false,
      password: false
    },
    isValid: false,
    touched: false
  });
 // console.log(stateInput)

  const inputTextHolder = useCallback(
    (inputIdentifier, text ) => {
        
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    let isValid = true;
   if (text.trim().length === 0) {
      isValid = false;
    }
    if ( inputIdentifier==='email' && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    
    
  
      dispatch({
        type: FORM_UPDATE,
        value: text,
        isValid: isValid, //true
        input: inputIdentifier
      });
    },[])


 const { onInputChange } = props;

  useEffect(() => {
    if (stateInput.isValid) {

      onInputChange(
        stateInput.inputValues
       
      );
    }
  }, [stateInput,]);

  return (
    <View style={styles.inputContainer}>
      <InputTxt
        {...props}
       changeText={inputTextHolder.bind(this, "email")}
        placeholder="email"
        keyboardType="email-address"
        
        
        autoCapitalize="none"
      
        style={styles.input}
      ></InputTxt>
      {!stateInput.Validities.email && (
        <Text>please enter a valid email </Text>
      )}

      <InputTxt
        {...props}
        changeText={inputTextHolder.bind(this, "password" )}
        placeholder="password"
        keyboardType="default"
        secureTextEntry
       
        autoCapitalize="none"
        
        style={styles.input}
      ></InputTxt>
      {!stateInput.Validities.password && (
        <Text> please enter a valid password  </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20
  },

  input: {
    width: 350,
    height: 70,
    fontSize:24,
   // fontWeight:"bold",
    color:"white",
    fontFamily:"anton",
    padding:10
   

  }
});

export default LogInputs;