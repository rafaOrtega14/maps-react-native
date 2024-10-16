import { View, StyleSheet } from "react-native";
import MapComponent from "../component/MapComponent";
import RestaurantInfoComponent from "../component/RestaurantInfo";
import { Props } from "../types/Navigation";

export default function MainScreen({ navigation, route }: Props<'main'>) {

    return (
        <View style={styles.container}>
        <MapComponent />
        <RestaurantInfoComponent
          navigation={navigation}
          route={route}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});