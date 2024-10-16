import { useState } from 'react';
import { Restaurant } from './repository/types';
import { PaperProvider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import globalContext from './context/global';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import RestaurantScreen from './pages/RestaurantScreen';
import { RootStackParamList } from './types/Navigation';
import useNotificationListener from './hooks/useNotificationListener';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [expoPushToken] = useNotificationListener('rafa');

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <globalContext.Provider value={{restaurant, setRestaurant, expoPushToken}}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="main"
              component={MainScreen}
              options={{ headerShown: false }} 
            />
            <Stack.Screen
              name="restaurant"
              component={RestaurantScreen}
              options={{title: restaurant?.name}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </globalContext.Provider>

    );
}
