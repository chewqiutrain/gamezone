import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    home: {
        screen: HomeStack
    },
    about: {
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawerNavigator); // called as Navigator at import site