import { View, StyleSheet, Text } from "react-native";
import { Resturant } from "../repository/types";

type RestaurantProps = { restaurant: Resturant }

export default function RestaurantInfoComponent({ restaurant }: RestaurantProps) {
    return (
        <View style={styles.restaurantContainer}>
            <Text>Nombre: {restaurant.name}</Text>
            <Text>Email: {restaurant.contact.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    restaurantContainer: {
      zIndex: 99,
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderRadius: 10,
      backgroundColor: 'white',
      width: '95%',
      height: '40%',
    }
  });