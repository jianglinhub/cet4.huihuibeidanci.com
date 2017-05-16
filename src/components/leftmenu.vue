<template>
	<div id="leftmenu">
		<div id="menu">
			<h2 class="text-align-center color-white">CET-4</h2>
			<h3 class="text-align-center color-white">四级单词记忆管理</h3>
		</div>
		<div id="zz" @click="closeMenu"></div>
	</div>
</template>

<script>
	export default {
		name: 'leftmenu',
		methods: {
			closeMenu: function () {
				this.$store.state.leftmenuShow = false
			}
		}
		
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/variables.less"; 

	#menu {
		z-index: 100;
		width: 70%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: @gray-dark;
		padding-top: 50px;
		opacity: 0.8;
		h2 {
			font-size: 300%;
		}
		h3 {
			font-size: 100%;
		}
	}
	#zz {
		z-index: 99;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: @black;
		opacity: 0.2;
	}
</style>

