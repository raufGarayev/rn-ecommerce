/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
