<template>
	<div id="bottomBtn">
		<button id="btn" v-bind:class="colorName" class="text-size-md">{{ value }}</button>
	</div>
</template>

<script>
	export default {
		name: 'bottomBtn',
		props: ['value', 'color', 'position'],
		computed: {
			colorName: function () {
				if (this.color == 'orange') {
					return this.colorName = 'orange'
				} else if (this.color == 'green') {
					return this.colorName = 'green'
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/variables.less"; 

	#bottomBtn {
		width: 100%;
		height: 50px;
		text-align: center;
		background-color: #fff;
		padding: 10px 0 10px 0;
		// background-color: #fff;
		// opacity: 0.9;
		background-image: url(../assets/images/opacity.png);
		#btn {
			height: 45px;
			width: 80%;
			color: #fff;
			border: 0px;
			letter-spacing: 2px;
			border-radius: @border-radius;
			outline: none;
		}
		.orange {
			background-color: @orange;
		}
		.green {
			background-color: @green;
		}
	}
</style>

