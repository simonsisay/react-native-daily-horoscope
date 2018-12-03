import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ZodiacSign = ({iconName, zodiac, navigation}) => {
	return(
		<TouchableHighlight 
			style={{padding:20}}
			onPress={() => navigation.navigate('read', {zodiacSign:zodiac.toLowerCase()})}>
			<View style={{marginBottom:15}}>
				<MaterialCommunityIcons name={`${iconName}`} size={100} color="#a86e12" />
				<Text style={{textAlign:'center', color:'white'}}>
					{zodiac}
				</Text>
			</View>
		</TouchableHighlight>
	)
}

export default ZodiacSign