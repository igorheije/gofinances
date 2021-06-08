import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Dashboard } from '../screens/Dashboard';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { Register } from '../screens/Register';
import { Abstract } from '../screens/Abstract';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60,
          backgroundColor: '#5636d3',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <AppTab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Resumo"
        component={Abstract}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="circular-graph" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};
export default AuthRoutes;
