import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      <Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}