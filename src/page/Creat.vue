<template>
	<div id="creat">
		<header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
		<div class="text-text padding-md">
			<p class="text-size-lg">Hi,</p>
			<p class="text-indent">亲爱的你，距离大学四级考试，还有365天，亲爱的你，距离大学四级考试，还有365天 亲爱的你，距离大学四级考试，还有365天 亲爱的你，距离大学四级考试，还有365天 </p>
			<p class="text-indent">亲爱的你，距离大学四级考试，还有365天 亲爱的你，距离大学四级考试，还有365天 亲爱的你，距离大学四级考试，还有365天 </p>
			<p class="text-align-right">会会</p>
		</div>
		<!-- native 表示在当前页面执行方法，非组建里面执行 -->
		<bottomBtn @click.native="toCreatSelect" value="创建计划" color="orange" class="bottomBtn"></bottomBtn>	
	</div>
</template>

<script>
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	
	export default {
		name: 'creat',
		components: {
			headerLg, 
			bottomBtn
		},
		methods: {
			toCreatSelect: function () {
				this.$router.push({ path: '/CreatSelect' })
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	
	#creat {
		p {
			margin-bottom: 10px;
		}
		#text-text {
			font-size: 110%;
		}
	}
</style>
