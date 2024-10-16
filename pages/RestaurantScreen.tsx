import { View, StyleSheet, Image } from "react-native"
import { ActivityIndicator, MD2Colors, Text } from "react-native-paper"
import Categories from "../component/Categories"
import Rating from "../component/Rating"
import { useContext } from "react"
import globalContext from "../context/global"

export default function Restaurant() {
    const { restaurant } = useContext(globalContext);

    if(restaurant) {
        return (
            <View>
                <Text style={styles.restaurantName} variant="displaySmall">{restaurant.name}</Text>
                <View style={styles.centerContent}>
                    <Image
                        style={styles.restaurantImage}
                        source={{ uri: 'https://picsum.photos/400/400' }}
                    />
                </View>

                <View style={styles.centerContent}>
                    <Text variant="bodyMedium">{restaurant.contact.email}</Text>
                    <Text variant="bodyMedium">{restaurant.contact.phone}</Text>
                </View>
                <Categories categories={restaurant.categories} />
                <Rating rate={restaurant.stars} />
                <View style={styles.centerContent}>
                    <Text variant="bodyLarge">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, 
                    </Text>
                </View>
            </View>
        )
    } else {
        return (<ActivityIndicator size={"large"} animating={true} color={MD2Colors.red800} />)
    }
}

const styles = StyleSheet.create({
    restaurantImage: {
        width: '90%',
        height: 400,
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
  });