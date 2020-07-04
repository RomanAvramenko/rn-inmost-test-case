/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from './src/screens/MainScreen';
import {FilterScreen} from './src/screens/FilterScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drinks"
            component={MainScreen}
            options={({navigation}) => ({
              headerTitle: 'Drinks',
            })}
          />
          <Stack.Screen name="Filters" component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
