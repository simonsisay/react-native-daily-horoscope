import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { Button } from 'native-base'


class HoroscopeReadScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			horoscope:'',
			day:'today',
			zodiacSign:'',
			currentDate:'',
			isSpinning:false
		}
	}

	static navigationOptions = ({navigation}) => {
		const { sign } = navigation.state.params;
		return {
			headerTitle:sign ? sign.toUpperCase() : '' 
		}
	}

  componentDidMount(){
  		const { zodiacSign } = this.props.navigation.state.params

  		this.props.navigation.setParams({
  			sign:zodiacSign
  		})

	  	this.getHoroscopeInfo('today', zodiacSign)
	  	this.setState({zodiacSign})
  }

  getHoroscopeInfo = (day, zodiacSign) => {
	  	this.setState({isSpinning:true})
	  	 axios({
	      method:'post',
	      url:`https://aztro.sameerkumar.website/?sign=${zodiacSign}&day=${day}`,
	    })
	    .then(response => {
	      console.log(response.data)
	      this.setState({horoscope:response.data.description, currentDate:response.data.current_date, isSpinning:false})
	    })
	    .catch(error => {
	    	console.log(error)
	    })
  }


	render(){
		const { zodiacSign } = this.props.navigation.state.params

		if(this.state.isSpinning){
			return (
				<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#3a2766'}}>
					<ActivityIndicator />
				</View>
			)
		}
		return(
			<View style={{flex:1, justifyContent:'center', alignItems:'center', padding:15, height:'100%', backgroundColor:'#3a2766'}}>
					<Text style={{textAlign:'center', fontWeight:'bold', marginVertical:30, color:'#a86e12'}}>
						{this.state.currentDate}
					</Text>
					<View> 
						<Text style={{fontSize:24, color:'#a86e12'}}>{this.state.horoscope}</Text>
					</View>

					<View style={{marginTop:20, flex:1, flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
						<Button bordered primary onPress={() => this.getHoroscopeInfo('yesterday', zodiacSign)}>
							<Text style={{padding:10, color:'#a86e12'}}>Yesterday</Text>
						</Button>

						<Button bordered primary onPress={() => this.getHoroscopeInfo('tomorrow', zodiacSign)}>
							<Text  style={{padding:10, color:'#a86e12'}}>Tomorrow</Text>
						</Button>
					</View>
			</View>
		)
	}
}

export default HoroscopeReadScreen