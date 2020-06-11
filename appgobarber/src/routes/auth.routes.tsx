import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../modules/auth/pages/SignIn';
import SignUp from '../modules/auth/pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />

    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
