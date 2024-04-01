<template>
	<el-row :gutter="20">
		<el-col :span="9">
			<el-card shadow="hover" header="即时销售情况">
				<el-row :gutter="10">
					<el-col :span="8">
						<sc-statistic
							title="销量"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="8">
						<sc-statistic
							title="销售额"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="8">
						<sc-statistic
							title="订单量"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
				</el-row>
			</el-card>
		</el-col>
		<el-col :span="15">
			<el-card shadow="hover" header="即时广告情况">
				<el-row :gutter="20">
					<el-col :span="5">
						<sc-statistic
							title="广告花费"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="5">
						<sc-statistic
							title="广告销售额"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="5">
						<sc-statistic
							title="广告订单量"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="5">
						<sc-statistic
							title="ACOS"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
					<el-col :span="4">
						<sc-statistic
							title="ACOAS"
							value="112893.00"
							prefix="¥"
							groupSeparator
						>
							<div class="flex align-center ">
								昨日
								<sc-trend v-model="trendValue1"></sc-trend>
							</div>
						</sc-statistic>
					</el-col>
				</el-row>
			</el-card>
		</el-col>
	</el-row>
</template>
<script setup>
import scStatistic from '@/components/scStatistic';
import { ref } from "vue"
const trendValue1 = ref('8.8')

</script>
<style>

</style>
