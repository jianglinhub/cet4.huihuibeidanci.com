<template>
	<div id="CreatFinsh">
		<header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
		<div class="padding-md">
			<div class="text-size-md">真实姓名</div>
			<div>
				<input type="text" class="inputs" v-model="name">
			</div>

			<div class="padding-md"></div>
			<div class="text-size-md">注册手机号</div>
			<div>
				<input type="text" class="inputs" v-model="mobile" onkeyup="this.value = this.value.replace(/\D/g, '')">
			</div>

			<div class="padding-md"></div>
			<div class="text-size-md">性别</div>
			<div class="padding-sm"></div>
			<div class="radio-sm">
				<ul>
					<li class="radiosm active" id="data-1" @click="sexSelect('data-1')">
						<div>男</div>
					</li>
					<li class="radiosm noactive" id="data-0" @click="sexSelect('data-0')">
						<div>女</div>
					</li>
				</ul>
			</div>
		</div>
		<bottomBtn @click.native="toCreatSuccess" value="完成注册" color="orange" class="bottomBtn"></bottomBtn>	
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
		
	Vue.use(VueResource)

	export default {
		name: 'CreatFinsh',
		data: function () {
			return {
				mobile: '133333322',
				name: 'wos',
				sex: 1
			}
		},
		components: {
			headerLg,
			bottomBtn
		},
		methods: {
			sexSelect: function (id) {
				var obj = document.getElementsByClassName('radiosm')
				for (var i = 0; i < obj.length; i++) {
					obj[i].setAttribute("class", "radiosm noactive")
				}
				document.getElementById(id).setAttribute("class", "radiosm active")
				this.sex = id.replace(/data-/g, '')
			},
			toCreatSuccess: function () {
				// if (this.name !== '' && this.mobile !== '') {
				// 	var formData = new FormData()
				// 	formData.append('name', this.name)
				// 	formData.append('mobile', this.mobile)
				// 	formData.append('sex', this.sex)
				// 	formData.append('examTime', this.$parent.examTime)
				// 	formData.append('preExamDay', this.$parent.preExamDay)

				// 	this.$http.post("http://" + this.$store.this.state.serverIP + '/json/server.php', formData).then(function (response) {
				// 		if (response.data.status == '1') {
				// 			this.$router.push({ path: '/CreatSuccess' })
				// 		}
				// 	}, function () {
				// 		this.$router.push({ path: '/ErrorPage' })
				// 	})
				// }
				if (this.name !== '' && this.mobile !== '') {
					this.$router.push({ path: '/CreatSuccess' })
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';

	#CreatFinsh {
		width: 100%;
		.inputs {
			border: 1px solid @gray-lighter;
			width: 100%;
			height: 35px;
			margin-top: 20px;
			outline: none;
			font-size: 100%;
			color: @gray;
			text-indent: 5px;
		}
		.radio-sm {
			li {
				float: left;
				width: 50px;
				height: 50px;
				padding: 5px;
				margin: 0 10px 10px 0;
			}
			.active {
				border: 1px solid @green;
				div {
					background-color: @green;
					height: 50px;
					text-align: center;
					line-height: 60px;
					color: @white;
				}
			}
			.noactive {
				border: 1px solid @white;
				div {
					background-color: @gray-lighter;
					height: 50px;
					text-align: center;
					line-height: 60px;
					color: @black;
					border: 1px solid @gray-light;
				}
			}
		}
	}
</style>
