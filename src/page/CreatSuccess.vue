<template>
	<div id="CreatSuccess">
		<header-md Title="CET-4" show="y"></header-md>
		<div class="text-text padding-md">
			<div class="padding-lg"></div>
			<div class="text-size-lg text-align-center padding-sm">注册成功</div>
			<div class="text-size-sm text-align-center">
				<span class="color-orange">+600</span>经验值
			</div>
		</div>
		<!-- native 表示在当前页面执行方法，非组建里面执行 -->
		<bottomBtn @click.native="toindex" value="查看计划" color="orange" class="bottomBtn"></bottomBtn>	
	</div>
</template>

<script>
	import headerMd from '../components/header-md.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	
	export default {
		name: 'CreatSuccess',
		components: {
			headerMd,
			bottomBtn
		},
		methods: {
			toindex: function () {
				this.$router.push({ path: '/index' })
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
</style>
