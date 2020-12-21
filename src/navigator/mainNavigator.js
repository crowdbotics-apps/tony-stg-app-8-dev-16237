import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215986Navigator from '../features/BlankScreen215986/navigator';
import BlankScreen115879Navigator from '../features/BlankScreen115879/navigator';
import BlankScreen015509Navigator from '../features/BlankScreen015509/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215986: { screen: BlankScreen215986Navigator },
BlankScreen115879: { screen: BlankScreen115879Navigator },
BlankScreen015509: { screen: BlankScreen015509Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
