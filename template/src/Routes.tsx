import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './screens';

const RootStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={'Home'} component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default Routes;
