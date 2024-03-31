// 静态路由配置
// 书写格式与动态路由格式一致，全部经由框架统一转换
// 比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。
// routes 显示在左侧菜单中的路由(显示顺序在动态路由之前)
// 示例如下

const routes = [
	{
		name: "dashboards",
		path: "/dashboards",
		meta: {
			icon: "el-icon-eleme-filled",
			title: "驾驶舱",
			role: ["SA"]
		},
		children: [{
			name: "dashboards",
			path: "/dashboards",
			component: "dashboard/index",
			meta: {
				icon: "el-icon-menu",
				title: "驾驶舱",
				role: ["SA"]
			}
		}]
	},
	{
		name: "order",
		path: "/order",
		meta: {
			icon: "el-icon-eleme-filled",
			title: "订单",
			role: ["SA"]
		},
		children: [{
			name: "purchase",
			path: "/purchase",
			component: "order/purchase/index",
			meta: {
				icon: "el-icon-menu",
				title: "采购订单",
				role: ["SA"]
			}
		}]
	},
	{
		name: "product",
		path: "/product",
		meta: {
			icon: "el-icon-eleme-filled",
			title: "产品",
			role: ["SA"]
		},
		children: [{
			name: "product",
			path: "/product",
			component: "product/list/index",
			meta: {
				icon: "el-icon-menu",
				title: "产品中心",
				role: ["SA"]
			}
		}]
	}
]

// const routes = []

export default routes;
