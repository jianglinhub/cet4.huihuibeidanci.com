<template>
	<div id="index">
		<header-md Title="CET-4" show="y"></header-md>
		<leftmenu v-show='this.$store.state.leftmenuShow'></leftmenu>	
		<face></face>
		<div class="more"></div>
		<speed></speed>
	</div>
</template>

<script>
	// import { mapState } from '../components/vuex.vue'
	import headerMd from '../components/header-md.vue'
	import leftmenu from '../components/leftmenu.vue'
	import face from '../components/face.vue'
	import speed from '../components/speed.vue'

	export default {
		name: 'index',
		components: {
			headerMd,
			leftmenu,
			face,
			speed
		},
		data: function () {
			return {
				
			}
		},
		methods: {
			toCreat: function () {
				this.$router.push({ path: '/Creat' })
			}
		},
		mounted: function () {
			// var xmlhttp, state
			// xmlhttp = new XMLHttpRequest()
			// xmlhttp.onreadystatechange = function () {
			// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// 		state = JSON.parse(xmlhttp.responseText)
			// 	} else {
			// 		// error
			// 	}
			// }
			// xmlhttp.open("GET", "http://" + this.$store.state.serverIP + "/data.php", false)
			// xmlhttp.send()
			// this.$store.state.percent = state.percent
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';

	.more {
		width: 72px;
		height: 22px;
		background: url(../assets/images/more.png) no-repeat;
		margin: 0px auto;
	}
</style>
