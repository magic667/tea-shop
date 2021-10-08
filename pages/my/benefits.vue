<template>
	<view class="container">
		<view class="section">
			<view class="d-flex justify-content-between align-items-center pt-40 pb-40">
				<view class="font-size-extra-lg">{{ userInfo.nickName }}</view>
				<button type="primary" plain class="member-btn" @tap="member">登录喜茶星球</button>
			</view>
			<view class="experience-card">
				<view class="d-flex">
					<view class="level">Lv.1</view>
					<image class="about-icon" src="/static/images/common/icon_about.png"></image>
				</view>
				<view>
					<view class="font-size-base">当前GO经验值60/299</view>
					<view class="process-box">
						<progress :percent="60/299*100" border-radius="4px" :stroke-width="4" activeColor="#343434" backgroundColor="#D0D0D0" />
					</view>
				</view>
			</view>
			<view class="benefit-card">
				<view class="header">
					<view class="title">等级权益</view>
				</view>
				<view class="grid">
					<view class="item" v-for="(item, index) in benefits" :key="index">
						<image class="image" :src="item.image"></image>
						<view>{{ item.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="section">
			<view class="benefit-card">
				<view class="header">
					<view class="title">开通礼包</view>
				</view>
				<view class="grid">
					<view class="item" v-for="(item, index) in disBenefits" :key="index">
						<image class="image" :src="item.image"></image>
						<view>{{ item.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white pb-30">
			<list-cell padding="30rpx 40rpx" last arrow hover>
				<view class="w-100 d-flex align-items-center">
					查看星球会员权益
				</view>
			</list-cell>
			<list-cell padding="30rpx 40rpx" last arrow hover>
				<view class="w-100 d-flex align-items-center">
					等级说明
				</view>
			</list-cell>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import {
		mapState
	} from 'vuex'

	export default {
		components: {
			listCell
		},
		data() {
			return {
				benefits: [{
						title: '喜茶满减券',
						image: '/static/images/my/member_benefits/me_rights_icon_1jia1.png'
					},
					{
						title: '喜茶买赠券',
						image: '/static/images/my/member_benefits/me_rights_icon_qingshi.png'
					}
				],
				disBenefits: [{
						title: '星球赠饮劵',
						image: '/static/images/my/member_benefits/me_rights_icon_free_dis.png'
					},
					{
						title: '买一送一劵',
						image: '/static/images/my/member_benefits/me_rights_icon_1jia1_dis.png'
					},
					{
						title: '买二送一劵',
						image: '/static/images/my/member_benefits/me_rights_icon_2jia1_dis.png'
					},
					{
						title: '喜茶轻食劵',
						image: '/static/images/my/member_benefits/me_rights_icon_qingshi_dis.png'
					},
					{
						title: '优先券',
						image: '/static/images/my/member_benefits/me_rights_icon_youxian_new_dis.png'
					},
					{
						title: '免运费劵',
						image: '/static/images/my/member_benefits/me_rights_icon_waimai_new_dis.png'
					}
				]
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			member() {
				uni.navigateTo({
					url: '/pages/my/member'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section {
		padding: 0 40rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
	}
	
	.member-btn {
		line-height: 1.8888;
		font-size: $font-size-sm;
	}
	
	.about-icon {
		width: 50rpx;
		height: 50rpx;
	}
	
	.experience-card {
		display: flex;
		width: 100%;
		height: 270rpx;
		flex-direction: column;
		justify-content: space-between;
		padding: 40rpx;
		margin-bottom: 40rpx;
		background-color: #FFFFFF;
		background: url('https://static.heytea.com/taro_trial/v1/img/my/member_benefits/me_rights_img_go.png') no-repeat;
		background-size: 100% 100%;
		border-radius: $border-radius-lg;
		box-shadow: 0 0 20rpx 0 rgba($color: $border-color, $alpha: 0.4);
		
		.level {
			margin-right: 10rpx;
			font-family: 'neutra';
			font-size: 40rpx;
		}
		
		.process-box {
			width: 50%;
			margin-top: 10rpx;
		}
	}
	
	.benefit-card {
		padding-bottom: 30rpx;
		
		.header {
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			
			.title {
				font-family: 'wenyue';
				font-size: $font-size-lg;
			}
		}
		
		.grid {
			display: flex;
			flex-wrap: wrap;
		}
		
		.item {
			display: flex;
			width: 33.3333%;
			flex-direction: column;
			align-items: center;
			margin: 34rpx 0;
			font-size: $font-size-sm;
		}
		
		.image {
			width: 64rpx;
			height: 64rpx;
			margin-bottom: 14rpx;
		}
	}
</style>
