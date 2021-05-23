import React from 'react'; // need this to render the Header component 
// Configure stack navigator 
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header'; 
import { ImageBackground } from 'react-native';


const screens = {
    about: {
        screen: About,
        navigationOptions: (props) => {
            // title: "About GameZone"
            return { 
                //`props1={props} is passed as an arg to Header() 
                //i.e. an object where key = props1, value = props
                headerTitle: () => <Header props1={props} title='About GameZone'/> 
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#eee", height: 85 },
        headerBackground: (<ImageBackground 
            source={require('../assets/game_bg.png')}
            style={{ height: '100%', width: '100%' }}
        />)
    }
})

export default AboutStack; 