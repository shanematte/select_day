const SAVE_WEEK_DAY = 'SAVE_WEEK_DAY'
const CHANGE_VISIBLE_MODAL = 'CHANGE_VISIBLE_MODAL'

const initialState = {
	weekday:[{
		title:'Sunday',
		preview:'Sun.'
	},{
		title:'Monday',
		preview:'Mon.'
	},{
		title:'Tuesday',
		preview:'Tues.'
	},{
		title:'Wednesday',
		preview:'Wed.'
	},{
		title:'Thursday',
		preview:'Thurs.'
	},{
		title:'Friday',
		preview:'Fri.'
	},{
		title:'Saturday',
		preview:'Sat.'
	}],
	selectDay:'',
	visibleModal:false
}

const appReducer = (state = initialState, action) => {

	switch(action.type){

		case SAVE_WEEK_DAY :
			return {
				...state,
				selectDay:action.selectDay
			}

		case CHANGE_VISIBLE_MODAL :
			return {
				...state,
				visibleModal:!state.visibleModal
			}

		default :
			return state

	}

}

export default appReducer