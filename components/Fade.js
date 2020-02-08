import React, { useState, useEffect } from 'react';
import { Animated, } from 'react-native';
import Layout from "./logComp/layout";

export default FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
     <Layout title={props.title}/>
    </Animated.View>
  );
}

/*
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
    */