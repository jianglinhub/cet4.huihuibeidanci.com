<template>
	<div id="CreatSelect">		
		<div class="padding-lg">
			<div class="text-size-lg">选择考试时间</div>
			<div class="padding-smsm"></div>
			<div class="text-size-lg-note">
				CET考试时间定于每年6月和12月的第三个星期六
			</div>
			<div class="padding-lg"></div>
			<div class="text-size-md">2017年</div>
			<div class="padding-smsm"></div>
			<div class="text-size-lg-note">
				选择其他的考试时间	<span class="text-green" @click="clickmore">选择更多时间</span>	
			</div>
			<div class="padding-lg"></div>
			<div class="radio-lg">
				<ul>
					<li class="radiolg active" id="data-2017-6-17" @click="dateSelect('data-2017-6-17')">
						<div>6月17日</div>
					</li>
					<li class="radiolg noactive" id="data-2017-12-16" @click="dateSelect('data-2017-12-16')">
						<div>12月16日</div>
					</li>
					<div v-show="radiolgMore">
						<li class="radiolg noactive" id="data-2018-6-17" @click="dateSelect('data-2018-6-17')">
						<div>6月17日</div>
						</li>
						<li class="radiolg noactive" id="data-2018-12-16" @click="dateSelect('data-2018-12-16')">
							<div>12月16日</div>
						</li>
						<li class="radiolg noactive" id="data-2019-6-17" @click="dateSelect('data-2019-6-17')">
							<div>6月17日</div>
						</li>
						<li class="radiolg noactive" id="data-2019-12-16" @click="dateSelect('data-2019-12-16')">
							<div>12月16日</div>
						</li>
					</div>
				</ul>
			</div>
			<div class="cf"></div>
			<div class="padding-lg"></div>
			<div class="text-size-md">预留备考时间</div>
			<div class="padding-smsm"></div>
			<div class="text-size-lg-note">
				设置考试前多少天完成单词计划
			</div>
			<div class="padding-md"></div>
			<div class="radio-md">
				<ul>
					<li class="radiomd noactive" id="data-90" @click="preExamDay('data-90')">
						<div>90天</div>
					</li>
					<li class="radiomd noactive" id="data-60" @click="preExamDay('data-60')">
						<div>60天</div>
					</li>
					<li class="radiomd active" id="data-30" @click="preExamDay('data-30')">
					<div>30天</div>
					</li>
				</ul>
			</div>
			<div class="cf"></div>
			<div class="padding-lg"></div>
		</div>
		<bottomBtn @click.native="toCreatFinsh" value="开始吧" color="orange"></bottomBtn>	
	</div>
</template>

<script>
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	
	export default {
		name: 'CreatSelect',
		components: {
			headerLg, 
			bottomBtn
		},
		data: function () {
			return {
				radiolgMore: false
			} 
		},
		methods: {
			toCreatSelect: function () {
				this.$router.push({ path: '/CreatSelect' })
			},
			dateSelect: function (id) {
				var obj = document.getElementsByClassName('radiolg')
				for (var i = 0; i < obj.length; i++) {
					obj[i].setAttribute("class", "radiolg noactive")
				}
				document.getElementById(id).setAttribute("class", "radiolg active")
				this.$parent.examTime = id.replace(/data-/g, '')
			},
			clickmore: function () {
				if (this.radiolgMore === true) {
					this.radiolgMore = false
				} else {
					this.radiolgMore = true
				}
			},
			preExamDay: function (id) {
				var obj = document.getElementsByClassName('radiomd')
				for (var i = 0; i < obj.length; i++) {
					obj[i].setAttribute("class", "radiomd noactive")
				}
				document.getElementById(id).setAttribute("class", "radiomd active")
				this.$parent.preExamDay = id.replace(/data-/g, '')
			},
			toCreatFinsh: function () {
				this.$router.push({ path: '/CreatFinsh' })
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';

	#CreatSelect {
		background-image: url(../assets/images/tartan.png)
	}
	.radio-lg {
		li {
			float: left;
			width: 120px;
			height: 120px;
			padding: 5px;
			margin: 0 10px 10px 0;
		}
		.active {
			border: 1px solid @green;
			div {
				background-color: @green;
				height: 120px;
				text-align: center;
				line-height: 120px;
				color: @white;
			}
		}
		.noactive {
			border: 1px solid @white;
			div {
				background-color: @gray-lighter;
				height: 120px;
				text-align: center;
				line-height: 120px;
				color: @black;
				border: 1px solid @gray-light;
			}
		}
	}
	.radio-md {
		li {
			float: left;
			width: 60px;
			height: 60px;
			padding: 5px;
			margin: 0 10px 10px 0;
		}
		.active {
			border: 1px solid @green;
			div {
				background-color: @green;
				height: 60px;
				text-align: center;
				line-height: 60px;
				color: @white;
			}
		}
		.noactive {
			border: 1px solid @white;
			div {
				background-color: @gray-lighter;
				height: 60px;
				text-align: center;
				line-height: 60px;
				color: @black;
				border: 1px solid @gray-light;
			}
		}
	}
</style>
