import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    main: undefined;
    restaurant: undefined;
};
export type Props<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;