import React, {useState} from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Login from "./screens/log/logIn"
import picture from "./store/reducer/picture";
import  * as Font from "expo-font"
import {AppLoading} from "expo"

const rootReducer = combineReducers({
  pic: picture
});

const store = createStore(rootReducer);


const fetchFont=()=>{
  return Font.loadAsync({
    "anton": require('./assets/font/Anton-Regular.ttf'),
    
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  //if its false
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFont}
        onFinish={()=>{
          setFontLoaded(true)
        }}
      />
    )
  }
  return <Provider store={store}>
<Login/>
  </Provider>;
}


