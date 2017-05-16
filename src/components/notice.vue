<template>
	<div id="notice">
		{{ numText }}
	</div>
</template>

<script>
	export default {
		name: 'notice',
		props: ['num'],
		computed: {
			numText: function () {
				var tempNum = parseInt(this.num)
				if (tempNum > 99) {
					return 99
				} else {
					return tempNum
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	#notice {
		background-color: #eb6419;
		color: #fff;
		font-size: 40%;
		text-align: center;
		border-radius: 20px;
		padding: 5px;
		width: 15px;
		height: 15px;
	}
</style>

