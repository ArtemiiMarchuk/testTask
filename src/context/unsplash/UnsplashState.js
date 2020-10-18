import React, {useReducer} from "react"
import {unsplashContext} from './unsplashContext'
import {unsplashReducer} from './unsplashReducer'
import {SET_LOADING, SEARCH_PHOTOS, GET_PHOTO} from '../types'
import {API_URL, API_CLIENT_ID} from '../../../config'

const withCreds = (url) => {
    return `${API_URL + url}client_id=${API_CLIENT_ID}`
}

export const UnsplashState = ({children}) => {
    const initialState = {
        photos: [],
        activePhoto: '',
        loading: false
    }

    const [state, dispatch] = useReducer(unsplashReducer, initialState)

    const searchPhotos = async () => {
        setLoading()

        await fetch(withCreds('photos/?'))
            .then(response => response.json())
            .then( responseJson => {
                const payload = responseJson.map((item) => {
                    return {
                        image: item.urls.thumb,
                        author: `${item.user.first_name} ${item.user.last_name ? item.user.last_name : ''}`,
                        name: item.description,
                        id: item.id
                    }
                })

                dispatch({
                    type: SEARCH_PHOTOS,
                    payload
                })
            })
    }

    const getActivePhoto = async id => {
        setLoading()

        await fetch(withCreds(`photos/${id}?`))
            .then(response => response.json())
            .then(responseJson => {
                dispatch({
                    type: GET_PHOTO,
                    payload: responseJson.urls.full
                })
            })
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    const {photos, activePhoto, loading} = state

    return (
        <unsplashContext.Provider value={{
            setLoading, searchPhotos, getActivePhoto,
            photos, activePhoto, loading
        }}>
            {children}
        </unsplashContext.Provider>
    )
}
