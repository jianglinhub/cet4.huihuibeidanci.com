import Vue from 'vue'
import Vuex from 'vuex'

var data = require('../../data')

Vue.use(Vuex)

// 模拟从服务器获取
// var state, xmlhttp
// xmlhttp = new XMLHttpRequest()
// xmlhttp.onreadystatechange = function () {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 		state = JSON.parse(xmlhttp.responseText)
// 	} else {
// 		this.state = {serverIP: 0}
// 	}
// }
// false 同步获取
// xmlhttp.open('GET', 'http://192.168.1.10/user.php', false)
// xmlhttp.send()

var state = {
	newbi: data.newbi,
	serverIP: data.serverIP,
	leftmenuShow: data.leftmenuShow,
	openid: data.openid,
	headimgurl: data.headimgurl,
	name: data.name,
	nickname: data.nickname,
	sex: data.sex,
	examTime: data.examTime,
	oneday: data.oneday,
	province: data.province,
	city: data.city,
	country: data.country,
	regdate: data.regdate,
	xp: data.xp,
	memory: data.memory,
	notice: data.notice,
	percent: data.percent
}

export default new Vuex.Store({
	state
})