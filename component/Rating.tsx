import { View, StyleSheet } from "react-native"
import { Icon } from "react-native-paper"

type RatingProps = {
    rate: number
}
export default function Rating({ rate }: RatingProps) {
    const stars = (): Array<React.JSX.Element> => {
        const starsIcons = []
        for(let i = 0; i < rate; i++) {
            starsIcons.push(<Icon key={i} source="star" color='#eded11' size={60} />)
        }
        return starsIcons
    }
    return(
        <View style={styles.ratingContainer}>
            {rate > 0 ? (
                    stars()
            ) : (
                <Icon key={0} source="skull" color='#eded11' size={60} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})