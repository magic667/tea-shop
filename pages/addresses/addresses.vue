<template>
	<view class="container">
		<view class="content">
			<list-cell v-for="(address, index) in addresses" :key="index" :lineLeft="false" @tap="choose(address)">
				<view class="address">
					<view class="info">
						<view class="user-row">
							{{ `${address.name}(${address.gender? '女士' : '男士'}) ${address.phone}`}}
						</view>
						<view class="address-row">
							<view class="is-default">默认地址</view>
							<view class="address">{{ `${address.address} ${address.description}`}}</view>
						</view>
					</view>
					<image class="edit-btn" @tap.stop="edit(address.id)" src="/static/images/common/edit.png"></image>
					<image src="/static/images/common/delete.png" class="delete-btn" @tap.stop="remove(address.id)"></image>
				</view>
			</list-cell>
		</view>
		<view class="footer">
			<button type="info" @tap="add">+添加地址</button>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			listCell
		},
		computed: {
			...mapState(['addresses']),
			myLength() {
				return this.addresses.length;
			}
		},
		methods: {
			...mapMutations(['SET_ADDRESS', 'SET_ORDER_TYPE','ADD_ADDRESS', 'REMOVE_ADDRESS']),
			add() {
				this.ADD_ADDRESS(this.myLength);
				uni.navigateTo({
					url: '/pages/addresses/add?id=' + this.myLength
				})
			},
			remove(id) {
				let removeID = this.$store.state.addresses.findIndex(item => item.id == id);
				this.REMOVE_ADDRESS(removeID);
			},
			edit(id) {
				uni.navigateTo({
					url: '/pages/addresses/add?id=' + id
				});
			},
			choose(address)  {
				this.SET_ADDRESS(address);
				this.SET_ORDER_TYPE('takeout');
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-bottom: 170rpx;
		margin-top: 20rpx;
	}
	
	.address {
		display: flex;
		width: 100%;
		align-items: center;
		
		.info {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-right: 20rpx;
			overflow: hidden;
			
			.user-row {
				margin-bottom: 10rpx;
				font-size: $font-size-lg;
				font-weight: 500;
			}
			
			.address-row {
				display: flex;
				align-items: center;
				
				.is-default {
					flex-shrink: 0;
					padding: 4rpx;
					margin-right: 6rpx;
					background-color: #faf5ef;
					font-size: 16rpx;
					color: $color-primary;
				}
				
				.address {
					font-size: $font-size-base;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
		
		.edit-btn {
			width: 45rpx;
			height: 45rpx;
			margin-right: 20rpx;
		}
		
		.delete-btn {
			width: 80rpx;
			height: 80rpx;
		}
	}
	
	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 150rpx;
		padding: 0 30rpx;
		justify-content: center;
		align-items: center;
		background-color: $bg-color;
		z-index: 10;
		
		button {
			width: 100%;
			font-size: $font-size-extra-lg;
		}
	}
</style>
