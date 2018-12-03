import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HoroscopesListScreen from '../screens/HoroscopesListScreen'
import HoroscopeReadScreen from '../screens/HoroscopeReadScreen'

const Routes = createStackNavigator({
	'horoscopes':{
		screen:HoroscopesListScreen,
		navigationOptions:{
			headerTitle:'Choose your sign',
			headerTintColor:'#a86e12',
			headerStyle:{
				backgroundColor:"#3a2766"
			}
		}
	},
	'read':{
		screen:HoroscopeReadScreen,
		navigationOptions:{
			headerTintColor:'#a86e12',
			headerStyle:{
				backgroundColor:"#3a2766"
			}
		}

	}
})

export default createAppContainer(Routes)