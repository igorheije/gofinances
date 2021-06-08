import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './tabRoutes';

const Routes = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);

export default Routes;
