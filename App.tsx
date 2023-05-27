/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from './screens/Product';
import Categories from './screens/Categories';
import Favorites from './screens/Favorites';
import Cart from './screens/Cart';


function App(): JSX.Element {
  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={() => ({
          tabBarLabelStyle: { fontSize: 12 }, // Customize the name font size
          tabBarActiveTintColor: 'black', // Customize the active tab name color
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="home" color={'black'} size={24} />
            ),
           }} />
           <Tab.Screen name="Product" component={Product} options={{
            tabBarButton: (props) => null,
            headerShown: false,
            tabBarStyle: {display: 'none'}
           }} />
           <Tab.Screen name="Categories" component={Categories} options={{
            tabBarButton: (props) => null,
            headerShown: false,
            tabBarStyle: {display: 'none'}
           }} />
           <Tab.Screen name="Favorites" component={Favorites} options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="heart" color={'black'} size={22} />
            ),
           }} />
           <Tab.Screen name="Cart" component={Cart} options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="shopping-cart" color={'black'} size={24} />
            ),
           }} />
      </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
