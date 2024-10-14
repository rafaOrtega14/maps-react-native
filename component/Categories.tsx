import { View, StyleSheet } from "react-native"
import { Chip } from "react-native-paper"

type CategoriesProps = {
    categories: string[]
}

export default function Categories({categories}: CategoriesProps) {
    return (
        <View style={styles.chipContainer}>
            {categories.map((category: string, index: number) => {
                return(
                    <Chip
                        style={styles.chip}
                        key={index}
                        icon="information" 
                        onPress={() => console.log('Pressed')}>
                        {category}
                    </Chip>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    chip: {
        padding: 5,
        margin: 5
    },
    chipContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    }
  });