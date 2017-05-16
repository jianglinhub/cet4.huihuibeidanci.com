<template>
	<div id="face">
		<div class="fl faceimg">
			<img :src="$store.state.headimgurl">
		</div>
		<div class="fl showx">
			<h3 id="showname">
				<span>{{ showname }}</span>
				<notice :num="this.$store.state.notice" v-show="noticeShow" class="notice"></notice>
			</h3>
			<div class="cf"></div>
			<h4>
				记忆里：<span class="color-orange">{{ $store.state.memory }}</span>	
				经验值：<span class="color-green">{{ $store.state.xp }}</span>
			</h4>
		</div>
		<div class="cf"></div>
	</div>
</template>

<script>
	import notice from '../components/notice.vue'

	export default {
		name: 'face',
		components: {
			notice
		},
		props: ['openid'],
		computed: {
			noticeShow: function () {
				if (this.$store.state.notice == 0) {
					return false
				} else {
					return true
				}
			},
			showname: function () {
				var showname = this.$store.state.name
				if (showname.length > 15) {
					showname = showname.substring(0, 8) + '...'
				}
				return showname
			}
		},
		mounted: function () {
			if (this.showname.length < 5) {
				document.getElementById("showname").style.fontSize = "200%"
			}
		}
	}
</script>

<style scoped>
	
	#face {
		padding: 20px;
		width: 100%;
		height: 100%;
	}
	.faceimg {
		width: 20%;
	}
	img {
		width: 100%;
		border: 6px solid #eae9e9
	}
	.showx {
		margin-top: 10px;
		margin-left: 20px;
		width: 70%;
	}
	.showx h3 {
		font-size: 200%;
		width: 100%;
	}
	.showx h3 span {
		float: left;
	}
	.showx h4 {
		margin-top: 5px;
		font-size: 100%;
	}
	.showx span {
		margin-right: 10px;
	}
	.notice {
		float: left;
	}
</style>

