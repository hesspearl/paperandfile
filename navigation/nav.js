import {createStackNavigator} from  'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import signup from "../screens/log/signup"
import login from "../screens/log/logIn"

const nav= createStackNavigator ({
    login:login,
    signup:signup,
    
},{
    defaultNavigationOptions:{
        
        headerShown:false    
    }
})

export default createAppContainer(nav)