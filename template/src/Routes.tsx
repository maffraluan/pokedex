import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, StatsScreen} from './screens';

const RootStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={'Home'} component={HomeScreen} />
      <RootStack.Screen name={'Stats'} component={StatsScreen} />
    </RootStack.Navigator>
  );
};

export default Routes;
