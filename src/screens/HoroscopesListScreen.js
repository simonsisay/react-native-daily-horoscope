import React, { Component } from 'react'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ZodiacSign from '../components/ZodiacSign'


class HoroscopesListScreen extends Component{
	render(){
		return(
			<View style={{flex:1, backgroundColor:'#3a2766'}}>
				<ScrollView>
					<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
						<ZodiacSign iconName="zodiac-cancer" zodiac="CANCER" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-aquarius" zodiac="AQUARIUS" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-aries" zodiac="ARIES" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-capricorn" zodiac="CAPRICORN" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-leo" zodiac="LEO" navigation={this.props.navigation} />
						<ZodiacSign iconName="zodiac-libra" zodiac="LIBRA" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-pisces" zodiac="PISCES" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-sagittarius" zodiac="SAGITTARIUS" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-scorpio" zodiac="SCORPIO" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-taurus" zodiac="TAURUS" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-gemini" zodiac="GEMINI" navigation={this.props.navigation}/>
						<ZodiacSign iconName="zodiac-virgo" zodiac="VIRGO" navigation={this.props.navigation}/>
					</View>
				</ScrollView>
			</View>
		)
	}
}


export default HoroscopesListScreen