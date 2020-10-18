import React, {useContext, useEffect} from 'react'
import {PhotoListItem} from '../component/PhotoListItem'
import {unsplashContext} from '../context/unsplash/unsplashContext'
import {ScrollView} from 'react-native'
import {Loader} from '../component/UI/Loader'

export const PhotosList = () => {
    const {loading, photos, searchPhotos} = useContext(unsplashContext)

    useEffect(() => {
        searchPhotos()
    }, [])

    function RenderPhotos() {
        return (
            <ScrollView>
                {photos.map((photo, key) => (
                    <PhotoListItem
                        image={photo.image}
                        author={photo.author}
                        name={photo.name}
                        id={photo.id}
                        key={key}
                    />
                ))}
            </ScrollView>
        )
    }

    return (
        <>
            {loading ? <Loader/> : RenderPhotos()}
        </>
    )
}

