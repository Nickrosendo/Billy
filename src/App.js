import { createDrawerNavigator } from 'react-navigation'
import { YellowBox } from 'react-native'

import Home from './containers/Home'
import Profile from './containers/Profile'
import Logout from './containers/Logout'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

const routerConfig = {
  Home: { screen: Home },
  Profile: { screen: Profile },
  Logout: { screen: Logout }
}

const drawerConfig = {
  drawerPosition: 'right'  
}

const App = createDrawerNavigator(routerConfig, drawerConfig)

export default App
