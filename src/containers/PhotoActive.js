import React, {useContext, useEffect} from 'react'
import {unsplashContext} from '../context/unsplash/unsplashContext'
import {Loader} from '../component/UI/Loader'
import {Dimensions} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'

export const PhotoActive = ({route}) => {
    const {loading, activePhoto, getActivePhoto} = useContext(unsplashContext)

    useEffect(() => {
        getActivePhoto(route.params.id)
    }, [])

    return (
        <>
            {loading
                ? <Loader/>
                : <AutoHeightImage
                    width={Dimensions.get('window').width}
                    source={{
                        uri: activePhoto
                    }}
                />
            }
        </>
    )
}
