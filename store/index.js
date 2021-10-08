import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {},
		isLogin: false,
		orderType: 'takein',
		addresses: [{
			"id": 1,
			"user_id": 1,
			"name": "梁先生",
			"phone": "18666610100",
			"gender": 0,
			"address": "有间大厦",
			"complete_address": "广东省深圳市宝安区福海大道118号",
			"description": "ABC1234",
			"latitude": "",
			"longitude": "",
			"is_default": 1
		}],
		myForm: {
			username: 'tinypuppet',
			telphone: '18666610100',
			gender: 0,
			birthday: '2000-06-01'
		},
		address: {},
		remark: '不打包'
	},
	mutations: {
		ADD_ADDRESS(state, myLength) {
			state.addresses.push({
				"id": 1 + myLength,
				"user_id": 1 + myLength,
				"name": "",
				"phone": "",
				"gender": 0,
				"address": "",
				"complete_address": "",
				"description": "",
				"latitude": "",
				"longitude": "",
				"is_default": 0
			})
		},
		REMOVE_ADDRESS(state, id) {
			state.addresses.splice(id, 1)
		},
		SET_MYFORM(state, myForm) {
			state.myForm = myForm
		},
		SET_MYADDRESS(state, payload) {
			state.addresses.splice(payload[0] - 1, 1, payload[1])
		},
		SET_ORDER_TYPE(state, orderType) {
			state.orderType = orderType
		},
		SET_ADDRESS(state, address) {
			state.address = address
		},
		SET_REMARK(state, remark) {
			state.remark = remark
		},
		SET_USERINFO(state, userInfo) {
			state.userInfo = userInfo
		},
		SET_ISLOGIN(state, isLogin) {
			state.isLogin = isLogin
		}
	}
})

export default store
