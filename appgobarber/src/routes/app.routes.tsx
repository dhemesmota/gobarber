import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AppointmentCreated from '../modules/appointment/pages/AppointmentCreated';
import CreateAppointment from '../modules/appointment/pages/CreateAppointment';
import Dashboard from '../modules/dashboard/pages/Dashboard';
import Profile from '../modules/user/pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#28262e" translucent />

    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="CreateAppointment" component={CreateAppointment} />
      <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  </>
);

export default AppRoutes;
