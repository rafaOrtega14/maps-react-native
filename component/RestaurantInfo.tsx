import { View, StyleSheet } from "react-native";
import { Button, Text } from 'react-native-paper'
import Categories from "./Categories";
import Rating from "./Rating";
import { sendPushNotification } from "../services/Notification";
import { useContext } from "react";
import globalContext from "../context/global";
import { Props } from "../types/Navigation";

export default function RestaurantInfoComponent({ navigation }: Props<'main'>) {
    const { restaurant, expoPushToken } = useContext(globalContext)
    if(restaurant) {
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
                                    try {
                                        await sendPushNotification(expoPushToken, restaurant)
                                        navigation.navigate('restaurant')
                                    } catch(e) {
                                        console.log(e)
                                    }

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