import { createContext } from 'react';
import { Restaurant } from '../repository/types';

type GlobalContext = {
    restaurant: Restaurant | undefined, 
    setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | undefined>>
    expoPushToken: string
}

const globalState = {
    restaurant: {
        grades: [],
        name: '',
        contact: {
            email: '',
            phone: '',
            location: []
        },
        stars: 0,
        categories: []
    },
    setRestaurant: () => null,
    expoPushToken: ''
}

const globalContext = createContext<GlobalContext>(globalState);

export default globalContext