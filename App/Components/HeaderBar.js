import {
    createAppContainer,
    createDrawerNavigator,
   } from 'react-navigation-drawer';
import BlueScreen from './BlueScreen'; 
import DefaultScreen from './DefaultScreen'; 

const HeaderBar = createDrawerNavigator(
    {
        BlueScreen: BlueScreen,
        DefaultScreen: {
            screen: DefaultScreen,
        }
    },
    {
        initialRouteName: 'DefaultScreen',
        
        
    }
);


export default createAppContainer(HeaderBar);