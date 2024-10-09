import { StyleSheet, View } from 'react-native';
import MapComponent from './component/MapComponent';
import RestaurantInfoComponent from './component/RestaurantInfo';
import { useState } from 'react';
import { Resturant } from './repository/types';

export default function App() {
  const [restaurant, setRestaurant] = useState<Resturant>()
  return (
    <View style={styles.container}>
      <MapComponent setRestaurant={setRestaurant} />
      {restaurant && (
        <RestaurantInfoComponent restaurant={restaurant} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantContainer: {
    zIndex: 99,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
  }
});
