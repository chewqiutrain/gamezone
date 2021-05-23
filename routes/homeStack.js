import React from 'react'; // need this to render the Header component 
// Configure stack navigator 
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'; 
import { Image, ImageBackground } from 'react-native'; 

/**
 * In this tutorial, we use Stack navigation to navigate between the 
 * home screen, and the review details screen. 
 * 
 * We'll use Drawer navigation to navigate between the home stack, and 
 * the about screen. Drawer navigator does not automatically show a header,
 * unlike stack navigator. We mitigate this by wrapping the about screen in 
 * a stack navigator, so it will get a header, and we can also have stack 
 * style navigation from the about screen in the future, if we wanted to. 
 * 
 * top most element will be the first screen that is displayed 
 * 
 * every screen that is in this object will be assigned a navigation property
 * this property can be used by the components in ../screens/
 */
const screens = {
    home: {
        screen: Home,
        navigationOptions: (props) => { // specify options for this screen
            //title: "GameZone", // default is the key 'home'
            // headerStyle: {
            //     backgroundColor: "#eee"
            // } 
            return { headerTitle: () => <Header props1={props} title='GameZone'/> } 
        }
    },
    reviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
            headerStyle: {
                backgroundColor: "tomato"
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "black",
        headerStyle: { backgroundColor: "teal", height: 85 },
        headerBackground: (<ImageBackground
            source={require('../assets/game_bg.png')}
            style={{
                width: "100%",
                height: "100%",
                flex: 1
            }}
         />)
    }
})

//if having homestack as a stack navigator.. ?
//export default createAppContainer(HomeStack) // this is called the navigator at the import site

export default HomeStack;