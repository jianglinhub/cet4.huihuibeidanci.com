<template>
	<div id="speed">
		<div class="tempText">{{ percentText }}</div>
		<div id="main">
			<div id="da" v-show="da"></div>
			<div id="xiao" v-show="xiao"></div>
			<div id="hui"></div>
			<div id="circlestext">{{ percentTextSay }}</div>
			<div id="cirlces">
				<div id="percent" class="bg-master-gradient">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'speed',
		data: function () {
			return {
				da: true,
				xiao: true,
				percentTextSay: '已完成',
				percent: this.$store.state.percent
			}
		},
		computed: {
			percentText: function () {
				if (this.percent == 0) {
					this.percentTextSay = '点击这里开始'
				} else {
					return this.percent + '%'
				}
			}
		},
		methods: {
			change: function () {
				if (this.percent < 50) {
					var xiao = parseInt(180 - this.percent * 1.8)
					document.getElementById("xiao").style.transform = "rotate(-" + xiao + "deg)"
				} else {
					var da = parseInt((this.percent - 50) * 3.6)
					document.getElementById("xiao").style.background = "#90d5b9"
					document.getElementById("xiao").style.transform = "rotate(-180deg)"
					document.getElementById("da").style.transform = "rotate(" + da + "deg)"
				}
			}
		},
		mounted: function () {
			this.change()
		}
	}
</script>

<style scoped>
	
</style>

