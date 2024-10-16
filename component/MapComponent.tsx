import React, { useContext, useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import Restaurants from '../repository/restaurants';
import { Restaurant } from '../repository/types';
import globalContext from '../context/global';

export default function MapComponent() {
    const [location, setLocation] = useState<Location.LocationObject>();
    const restaurants = useRef<Array<Restaurant>>(Restaurants);
    
    const { setRestaurant } = useContext(globalContext);

    const handlePressRestaurant = (restaurant: Restaurant) => {
        setRestaurant(restaurant)
    }
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);
      if(location) {
        const [longitude, latitude] = restaurants.current[0].contact.location;
        return (
            <MapView
              initialRegion={{
                  latitude,
                  longitude,
                  latitudeDelta: 0.0422,
                  longitudeDelta: 0.0421,
              }}
              style={styles.map}
            >
                {restaurants.current.map((restaurant, index: number) => {
                    const [longitude, latitude] = restaurant.contact.location;
                    return (
                    <Marker
                        key={index}
                        coordinate={{ latitude, longitude }}
                        onPress={() => handlePressRestaurant(restaurant)}
                    />
                )
                })}   
            </MapView>
        );
      } else {
        return (<Text>Cargando...</Text>)
      }

}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1
  },
});