import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookScreen from './src/pages/BookScreen'
import CardScreen from './src/pages/CardScreen'
import ShoppingCart from './src/components/ShoppingCart'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Books' component={BookScreen} options={{ headerRight: props => <ShoppingCart {...props} /> }} />
          <Stack.Screen name='Card' component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})