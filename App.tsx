import { StyleSheet, View } from 'react-native';
import MapComponent from './component/MapComponent';
import RestaurantInfoComponent from './component/RestaurantInfo';
import { useEffect, useRef, useState } from 'react';
import { Resturant } from './repository/types';
import { PaperProvider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './services/Notification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [restaurant, setRestaurant] = useState<Resturant>();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ''))
      .catch((error: any) => setExpoPushToken(`${error}`));


    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(JSON.stringify(response));
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapComponent setRestaurant={setRestaurant} />
        {restaurant && (
          <RestaurantInfoComponent restaurant={restaurant} expoPushToken={expoPushToken} />
        )}
      </View>
    </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
