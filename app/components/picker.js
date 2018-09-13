import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	Text,
	View,
	Dimensions,
	Alert,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView
} from 'react-native'

import { Field, reduxForm, formValueSelector } from 'redux-form'

const { width, height } = Dimensions.get('window')

const RenderForm = ({title, fullTitle, changeDay}) => {

	const selectDay = () => {
		changeDay(title, fullTitle)
	}

	return(
		<TouchableOpacity onPress={selectDay} style={styles.buttonDay}><Text style={styles.buttonDayTitle}>{title}</Text></TouchableOpacity>
	)

}

class Picker extends Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	changeDay(preview, title){

		this.props.oncloseModal(title)
	}

	render(){

		let { weekday } = this.props

		return(
			<View style={styles.mainView}>
				<ScrollView>
					{
						weekday.map((day, index)=>{
							return <Field changeDay={this.changeDay.bind(this)} component={RenderForm} key={index} value={day.title} name={day.title} fullTitle={day.title}  title={day.preview}/>
						})
					}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	buttonDayTitle:{
		fontSize:33
	},
	buttonDay:{
		width:'100%',
		height:80,
		justifyContent:'center',
		alignItems:'center',
		marginTop:5,
		marginBottom:5,
		padding:7
	},
	mainView:{
		flex:1,
		width:'100%',
		height:height
	},
	input:{
		backgroundColor:'orange',
		color:'#fff',
		width:width-20,
		height:40
	}
})

export default reduxForm({
  form: 'weekday'
})(Picker)




