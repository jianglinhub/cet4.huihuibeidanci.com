<template>
	<div id="header-md">
		<h3>{{ Title }}</h3>
		<div v-show="moreshow" id="menu">
			<img src="../assets/images/menu.png" width="20" height="20" alt="三" @click="leftmenuOpen">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header-md',
		props: ['Title', 'show'],
		computed: {
			moreshow: function () {
				if (this.show == 'y') {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			leftmenuOpen: function () {
				this.$store.state.leftmenuShow = true
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/variables.less"; 

	#header-md {
		height:30px;
		box-shadow: #ddd 0 3px;
		width: 100%;
		background: linear-gradient(270deg, @green 0%, @turquoise 100%);
		color: @white;
		padding: 10px 0 0 20px;
		h3 {
			font-size: 120%;
			float: left;
			width: 80%;
		}
		#menu {
			float: right;
			width: 20%;
			text-indent: 20px;
		}
	}
</style>

