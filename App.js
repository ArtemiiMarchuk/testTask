/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import {PhotosList} from './src/containers/PhotosList'
import {PhotoActive} from './src/containers/PhotoActive'
import {UnsplashState} from './src/context/unsplash/UnsplashState'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const App = () =>  (
    <UnsplashState>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Photos"
                    component={PhotosList}
                />
                <Stack.Screen name="PhotoActive" component={PhotoActive} />
            </Stack.Navigator>
        </NavigationContainer>
    </UnsplashState>
)
