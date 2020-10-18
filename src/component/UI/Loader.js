import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

export const Loader = () => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../assets/images/loading.gif')}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    image: {
        width: 100
    }
})
