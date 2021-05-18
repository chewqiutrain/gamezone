// Configure stack navigator 
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    about: {
        screen: About,
        navigationOptions: {
            title: "About GameZone"
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#eee", height: 85 }
    }
})

export default AboutStack; 