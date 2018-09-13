import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues, formValues } from 'redux-form'
import {
	Text,
	View,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Alert
} from 'react-native'

import Picker from './picker'

const { width, height } = Dimensions.get('window')

class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
		}
	}

	goToPage(page){
		return this.props.navigation.navigate(page)
	}

	changeModalStatus(){
		this.props.visibleModal()
	}

	closeModalAndSave(title){
		this.props.visibleModal()
		this.props.saveDay(title)
	}

	render(){

		let { selectDay, visibleModal, weekday } = this.props.app

		return(
			<View style={styles.mainView}>

		        <Modal
		          animationType="slide"
		          transparent={false}
		          visible={visibleModal}
		          onRequestClose={()=>{}}
		          >
		          	<Picker oncloseModal={this.closeModalAndSave.bind(this)} weekday={weekday}/>
		        </Modal>

			   	<TouchableOpacity onPress={this.changeModalStatus.bind(this)}>
			   		<Text>Tap to select the day of the week</Text>
			   	</TouchableOpacity>

			   <Text style={styles.selectDayTitle}>{ selectDay || 'Select day'  }</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	selectDayTitle:{
		marginTop:50,
		fontSize:35,
		color:'#000'
	},
	mainView:{
		width:'100%',
		height:height,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	title:{
		fontSize:22,
	}
})

const mapStateToProps = (state) => {
	return {
		app:state.app,
		form:state.form
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		visibleModal:()=>{
			return dispatch({
				type:'CHANGE_VISIBLE_MODAL'
			})
		},
		saveDay:(title)=>{
			return dispatch({
				type:'SAVE_WEEK_DAY',
				selectDay:title
			})
		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
