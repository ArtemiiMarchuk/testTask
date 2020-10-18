import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import { useNavigation } from '@react-navigation/native'

export const PhotoListItem = ({image, author, name, id}) => {
    const navigation = useNavigation()

    const clickHandler = () => {
        navigation.navigate('PhotoActive', {id})
    }

    return (
        <TouchableOpacity
            onPress={clickHandler}
        >
            <View style={styles.container}>
                <AutoHeightImage
                    width={150}
                    source={{
                        uri: image
                    }}
                    style={styles.image}
                />
                {
                    author ? <Text style={styles.author}>Author: {author}</Text> : null
                }
                {
                    name ? <Text style={styles.description}>{name}</Text> : null
                }
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        borderBottomColor: "#eee",
        borderBottomWidth: 4,
        paddingBottom: 20
    },
    image: {
        marginBottom: 10,
    },
    author: {
        fontSize: 20
    },
    description: {
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 8
    }
})
