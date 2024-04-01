<template>
	<el-card shadow="hover" header="实时销量">
		<el-row :gutter="10">
			<el-col :span="12">
				<el-row :gutter="10">
					<el-col :span="12">
						<div class="box-item blue">
							<div class="sc-statistic">
								<div class="sc-statistic-title">2022-09-27~2022-10-24</div>
								<div class="flex align-center ">
									销量
									<sc-trend v-model="trendValue1"></sc-trend>
								</div>
								<div class="flex align-center ">
									销售额
									<sc-trend v-model="trendValue2"></sc-trend>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="box-item orange">
							<div class="sc-statistic">
								<div class="sc-statistic-title">2022-09-27~2022-10-24</div>
								<div class="flex align-center ">
									销量
									<sc-trend v-model="trendValue1"></sc-trend>
								</div>
								<div class="flex align-center ">
									销售额
									<sc-trend v-model="trendValue2"></sc-trend>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
				<div class="mt15">
					<el-dropdown>
						<span class="subtitle">
							销量<el-icon class="el-icon--right"><arrow-down /></el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item class="subtitle">销量</el-dropdown-item>
								<el-dropdown-item class="subtitle">订单量</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<scEcharts height="300px" :option="option2"></scEcharts>
				</div>
			</el-col>
			<el-col :span="12">
				<el-row :gutter="10">
					<el-col :span="12">
						<div class="box-item green">
							<div class="sc-statistic">
								<div class="sc-statistic-title">2022-09-27~2022-10-24</div>
								<div class="flex align-center ">
									销量
									<sc-trend v-model="trendValue1"></sc-trend>
								</div>
								<div class="flex align-center ">
									销售额
									<sc-trend v-model="trendValue2"></sc-trend>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
				<div class="mt15">
					<div class="subtitle">销售额</div>
					<scEcharts height="300px" :option="option2"></scEcharts>
				</div>
			</el-col>
		</el-row>
	</el-card>
</template>
<script setup>
import scEcharts from '@/components/scEcharts';
import { ref } from "vue"
const trendValue1 = ref('8');
const trendValue2 = ref('8');
const option2 = ref({
	title: {
		text: '',
		subtext: '',
	},
	grid: {
		top: '80px'
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		data: [120, 200, 150, 80, 70, 110, 130],
		type: 'line',
	},
	{
		data: [110, 180, 120, 120, 60, 90, 110],
		type: 'line',
	}]
})
</script>
<style>

</style>
