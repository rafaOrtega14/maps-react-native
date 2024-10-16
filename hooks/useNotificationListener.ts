import { useEffect, useRef, useState } from "react";
import { registerForPushNotificationsAsync } from "../services/Notification";
import * as Notifications from 'expo-notifications';

export default function useNotificationListener(name: string) {
    const [expoPushToken, setExpoPushToken] = useState('');
    const notificationListener = useRef<Notifications.Subscription>();
    const responseListener = useRef<Notifications.Subscription>();

    useEffect(() => {
        registerForPushNotificationsAsync()
          .then(token => setExpoPushToken(token ?? ''))
          .catch((error: any) => setExpoPushToken(`${error}`));
    
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response, name)
        });
    
        return () => {
          notificationListener.current &&
            Notifications.removeNotificationSubscription(notificationListener.current);
          responseListener.current &&
            Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);
    
      return [expoPushToken]
}