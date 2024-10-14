import { View, StyleSheet } from "react-native";
import { Button, Text } from 'react-native-paper'
import { Resturant } from "../repository/types";
import Categories from "./Categories";
import Rating from "./Rating";
import { sendPushNotification } from "../services/Notification";

type RestaurantProps = { restaurant: Resturant, expoPushToken?: string }

export default function RestaurantInfoComponent({ restaurant, expoPushToken }: RestaurantProps) {
    return (
        <View style={styles.restaurantContainer}>
            <Text style={styles.restaurantName} variant="displaySmall">{restaurant.name}</Text>
            <View style={styles.centerContent}>
                <Text variant="bodyMedium">{restaurant.contact.email}</Text>
                <Text variant="bodyMedium">{restaurant.contact.phone}</Text>
            </View>
            <Categories categories={restaurant.categories} />
            <Rating rate={restaurant.stars} />
            <View style={styles.centerContent}>
                <Button 
                    style={styles.bookButton} 
                    mode="contained" 
                    onPress={async () => {
                            if(expoPushToken) {
                                await sendPushNotification(expoPushToken, restaurant)
                            }
                        }
                    }
                >
                    Reserva
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bookButton: {
        width: '90%',
    },
    restaurantName: {
        textAlign: 'center',
        marginTop: 10
    },
    centerContent: {
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10
    },
    restaurantContainer: {
      zIndex: 99,
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'white',
      width: '100%',
      height: '35%',
    }
  });