import HomeScreen from "./HomeScreen";
import ColorScreen from "./ColorScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Color: {screen: ColorScreen}
  }, {
    initialRouteName:"Home"
  })


export const AppRouter = AppNavigator.router;
export default createAppContainer(AppNavigator);
