import { createDrawerNavigator } from 'react-navigation'
import { YellowBox } from 'react-native'

import Home from './containers/Home'
import Profile from './containers/Profile'
import BillsHistory from './containers/BillsHistory'
import PaymentMethods from './containers/PaymentMethods'
import Settings from './containers/Settings'
import Logout from './containers/Logout'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

const routerConfig = {
  Home: { screen: Home },
  Profile: { screen: Profile },
  BillsHistory: { screen: BillsHistory },
  PaymentMethods: { screen: PaymentMethods },
  Settings: { screen: Settings },
  Logout: { screen: Logout },
}

const drawerConfig = {
  drawerPosition: 'left'  
}

const App = createDrawerNavigator(routerConfig, drawerConfig)

export default App
