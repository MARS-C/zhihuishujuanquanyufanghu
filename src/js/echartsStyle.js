;
(function ($) {
	$.fn.extend({
		//玫瑰图
		syMpie: function (Obj) {
			var defaultObj = {
				color: ['#0973f5', '#3beac8', '#f58336', '#8f99f4', '#febd42',],
				tooltip: {
					trigger: 'item',
					formatter: "{b} : {d}%"
				},
				legend: {
					show: true,
					left: 'center',
					bottom: 4,
					itemWidth: 10,
					itemHeight: 10,
					textStyle: {
						color: '#607086',
						fontSize: 12
					}
				},
				series: [{
					name: '',
					type: 'pie',
					radius: ['20%', '70%'],
					center: ['50%', '54%'],
					roseType: 'radius',
					label: {
						show: false
					},
					labelLine: {
						show: false
					},
					hoverOffset: 3,
					itemStyle: {
						normal: {
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 4,
						}
					},
					data: []
				},
				// 边框的设置
				{
					radius: ['10%', '12%'],
					center: ['50%', '54%'],
					type: 'pie',
					silent: true,
					label: {
						show: false

					},
					labelLine: {
						show: false

					},
					animation: false,
					tooltip: {
						show: false
					},
					data: [{
						value: 1,
						itemStyle: {
							color: "#e9edf7",
						},
					}],
				},
				]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//叠加柱状图
		sydjBar: function (Obj) {

			var defaultObj = {
				color: ['#0973f5', '#3beac8', '#f58336', '#8f99f4', '#febd42'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						lineStyle: {
							opacity: 0.6
						}
					},
					confine: true
				},

				legend: {
					orient: 'horizontal',
					right: "3%",
					top: "12px",
					textStyle: {
						color: '#585858',
						fontSize: 12,

					},
					itemWidth: 10,
					itemHeight: 10
				},

				grid: {
					left: '3%',
					right: '5%',
					bottom: '5%',
					top: '60px',
					containLabel: true,
					z: 22
				},
				xAxis: [{
					type: 'category',
					gridIndex: 0,
					data: [],
					axisTick: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#d5d8d5'

						}
					},
					axisLabel: {
						interval: 0,
						color: '#333333',
						margin: 10,
						textStyle: {
							fontSize: 12
						}
					}
				}],
				yAxis: [{
					type: 'value',
					//   name: "单位:户",
					nameTextStyle: {
						color: "rgb(170,170,170)"
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					gridIndex: 0,
					splitLine: {
						show: false

					},
					axisLabel: {
						formatter: '{value}',
						color: '#333333',
						margin: 10,
						textStyle: {
							fontSize: 12
						}
					}
				}],
				series: []
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}

			this.on('click', function (params) {
				//option.xAxis[params.seriesIndex].data[param.dataIndex];
				console.log(params)
				//var name = parseInt(params.name);
			});

			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},


		//饼状图
		syPie: function (Obj) {

			var defaultObj = {
				color: ["#009de1", "#ff9400"],
				tooltip: {
					trigger: 'item',
					confine: true,
					formatter: "{b} : {c}口 ({d}%)"
				},
				legend: {
					data: ['探井', '评价井'],
					icon: 'circle',
					top: "4%",
					left: 20,
					orient: 'vertical',
					itemWidth: 10,
					itemHeight: 10,
					itemGap: 10,

					formatter: function (name) {
						return "{title|" + name + "}"
					},

					textStyle: {
						rich: {
							title: {
								fontSize: 12,
								lineHeight: 12
							}
						}
					},

				},
				series: [{

					type: 'pie',
					radius: '70%',
					center: ['50%', '55%'],
					data: [{
						value: 0,
						name: '探井'
					},
					{
						value: 0,
						name: '评价井'
					}
					],
					label: {
						normal: {
							textStyle: {
								fontSize: 14,

							},
							formatter: function (param) {

								//return ['{c|param.name'}']
								return param.value;
							},
							rich: {
								c: {
									color: 'rgb(241,246,104)',
									fontSize: 20,
									fontWeight: 'bold',
									lineHeight: 5
								},
								b: {
									color: 'rgb(98,137,169)',
									fontSize: 15,
									height: 40
								},
							},
						}
					},
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//柱状图
		syBar: function (Obj) {

			var defaultObj = {
				color: ['#009de1'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "{b} :<br/> {c}&nbsp;公里",

					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '10%',
					left: '4%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{

					type: 'category',
					data: ['非洲地区', '美洲地区', '中亚地区', '中东地区', '亚太地区'],
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}
				}],
				yAxis: [{

					type: 'value',
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					splitLine: {
						show: false
					}
				}],
				series: [{
					type: 'bar',
					barWidth: 26,
					data: [0, 0, 0, 0, 0],
					label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//显示y轴的柱状图
		syhasyBar: function (Obj) {

			var defaultObj = {
				color: ['#009de1'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "{b} :<br/> {c}&nbsp;公里",

					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '14%',
					left: '4%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{

					type: 'category',
					data: ['非洲地区', '美洲地区', '中亚地区', '中东地区', '亚太地区'],
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}
				}],
				yAxis: [{
					name: "(公里)",
					nameTextStyle: {
						color: "#7a7a7a"
					},
					type: 'value',
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {

						lineStyle: {
							color: "#bebebe"
						}
					},

					splitLine: {
						show: false
					}
				}],
				series: [{
					type: 'bar',
					barWidth: 26,
					data: [0, 0, 0, 0, 0],
					label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//横向的柱状图
		syhorizontalBar: function (Obj) {
			var defaultObj = {
				color: ['#009de1'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "{b} :<br/> {c}&nbsp;公里",

					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '14%',
					left: '8%',
					right: '8%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{
					name: "(公里)",
					nameTextStyle: {
						color: "#7a7a7a"
					},
					type: 'value',
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {

						lineStyle: {
							color: "#bebebe"
						}
					},

					splitLine: {
						show: false
					}
				}],
				yAxis: [{
					name: "二\n维\n部\n署",
					nameLocation: 'top',
					// nameGap:50,
					nameTextStyle: {
						fontSize: 14,
						color: "#7a7a7a",
						padding: [100, 50, 0, 0]
					},


					type: 'category',
					data: [],
					axisLabel: {
						show: false,
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}




				}],
				series: [{
					type: 'bar',
					barWidth: 26,
					data: [],
					label: {
						normal: {
							show: true,
							position: "right",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;


		},


		//横向的柱状图
		transverseBar: function (Obj) {
			var defaultObj = {
				color: ['#5888f6', '#69e3df', '#f9a347'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "",

					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					orient: 'horizontal',
					x: 'right',

					y: "3%",
					itemWidth: 20,
					itemHeight: 10
				},
				grid: {
					top: '14%',
					left: '8%',
					right: '8%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{
					name: "万元",
					nameTextStyle: {
						color: "#7a7a7a"
					},
					type: 'value',
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {

						lineStyle: {
							color: "#bebebe"
						}
					},

					splitLine: {
						show: false
					}
				}],
				yAxis: [{
					name: "",
					nameTextStyle: {
						fontSize: 12,
						color: "#7a7a7a"
					},


					type: 'category',
					data: [],
					axisLabel: {
						show: true,
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}




				}],
				series: [{
					type: 'bar',
					barWidth: 26,
					data: [],
					label: {
						normal: {
							show: false,
							position: "right",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;


		},


		//折线图
		syLine: function (Obj) {

			var defaultObj = {
				color: ['#009de1'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "{b} :<br/> {c}&nbsp;公里",

					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '14%',
					left: '4%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{

					type: 'category',
					data: ['非洲地区', '美洲地区', '中亚地区', '中东地区', '亚太地区'],
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}
				}],
				yAxis: [{
					name: "(公里)",
					nameTextStyle: {
						color: "#7a7a7a"
					},
					type: 'value',
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {

						lineStyle: {
							color: "#bebebe"
						}
					},

					splitLine: {
						show: false
					}
				}],
				series: [{
					type: 'line',
					symbol: "circle", //标记的图形为实心圆
					symbolSize: 10, //标记的大小
					data: [0, 0, 0, 0, 0],
					label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;


		},

		//密集柱状图
		syDenselyBar: function (Obj) {

			var defaultObj = {
				color: ['#009de1'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "周 :{b}<br/> 当前完成 :{c}km",

					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: 30,
					left: '4%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				xAxis: [{

					type: 'category',
					data: [],
					axisLabel: {
						interval: 4,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a"
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					}
				}],
				yAxis: [{

					type: 'value',
					name: "(km)",
					nameTextStyle: {
						color: "#7a7a7a"
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a"
						}
					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					splitLine: {
						show: false
					}
				}],
				series: [{
					type: 'bar',
					data: [],
					label: {
						normal: {
							show: false
						}
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;

		},

		// 雷达图
		radarBar: function (Obj) {
			var defaultObj = {
				color: ['#4472C5', '#ED7C30', '#80FF80', '#FF8096', '#800080'],
				legend: {
					data: ['异常次数', '平均偏差'],
					bottom: 10,
				},
				tooltip: {
					trigger: 'item',
					backgroundColor: 'rgba(0,0,250,0.2)'
				},
				radar: [{
					indicator: [{
						text: '网络异常'
					},
					{
						text: '推送异常'
					},
					{
						text: '指标异常'
					},
					{
						text: '能效异常'
					},
					{
						text: '能耗异常'
					}
					],
					center: ['50%', '50%'],
					radius: 120,
					startAngle: 90,
					splitNumber: 5,
					shape: 'circle',
					name: {
						textStyle: {
							color: '#333'
						}
					},
					splitArea: {
						areaStyle: {
							type: 'dashed',
							color: ['#ebf1f9'],
							shadowColor: 'rgba(0, 0, 0, 0)',
							shadowBlur: 10
						}
					},
					axisLine: {
						lineStyle: {
							type: 'dashed',
							color: 'rgba(255, 255, 255, 0.5)'
						}
					},
					splitLine: {
						lineStyle: {
							type: 'dashed',
							color: '#2f84d4'
						}
					}
				}],
				series: [{
					name: '雷达图',
					type: 'radar',
					itemStyle: {
						emphasis: {
							// color: 各异,
							lineStyle: {
								width: 4
							}
						}
					},
					data: [{
						value: [100, 8, 0.40, -80, 2000],
						name: '异常次数',
						lineStyle: {
							normal: {
								color: '#f9a347'
							}
						}
					},
					{
						value: [60, 5, 0.30, -100, 1500],
						name: '平均偏差',
						areaStyle: {
							normal: {
								color: '#5569f1'
							}
						},
						lineStyle: {
							normal: {
								color: '#5569f1'
							}
						}
					}
					]
				}]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		// 面积图 
		areaBar: function (Obj) {
			var defaultObj = {
				tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						return [
							params[0].value
						].join('<br>');
					}
				},
				xAxis: {
					type: 'category',
					data: [1, 2, 3, 4, 5, 6, 7]
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					},
				},
				series: [{
					type: 'line',
					symbolSize: 10,
					smooth: true,
					areaStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#80f0ec'
								}, {
									offset: 1,
									color: '#fff'
								}]
							}
						}
					},
					lineStyle: {
						normal: {
							color: '#2cd3cd'
						}
					},
					itemStyle: {
						normal: {
							color: '#2cd3cd'
						}
					},
					data: [5, 3, 9, 4, 4, 8, 6],
					z: 2
				}]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		// 线性图
		lineBar: function (Obj) {
			var defaultObj = {
				color: ['#f9a346', '#69e3df', '#f9a347'],
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					type: 'plain',
					itemWidth: 20,
					itemHeight: 10,
					data: ['视在功率', '有功功率', '无功功率']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					splitLine: {
						show: false
					},
					data: ['0:00', '2:00']
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					}
				},
				series: [{
					name: '视在功率',
					type: 'line',
					smooth: true,
					data: [120, 132]
				},
				{
					name: '有功功率',
					type: 'line',
					smooth: true,
					data: [220, 182]
				},
				{
					name: '无功功率',
					type: 'line',
					smooth: true,
					data: [150, 232]
				}
				]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		// 矩形树图Treemap
		treemapBar: function (Obj) {

			var defaultObj = {
				tooltip: {
					trigger: 'item',
					formatter: "{b}: {c}"
				},
				toolbox: {
					show: false

				},
				calculable: false,
				series: [{
					name: '照明区域',
					type: 'treemap',
					itemStyle: {
						normal: {
							label: {
								show: true,
								formatter: "{b}"
							},
							borderWidth: 1
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: []
				}]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},


		// 横向 bar
		horizontalBar: function (Obj) {
			var defaultObj = {
				tooltip: {
					show: true,
					formatter: "{b}:{c}"
				},
				grid: {
					left: '0%',
					top: '3%',
					right: '0%',
					bottom: '0%',
					containLabel: true
				},
				xAxis: {
					show: false,
				},
				yAxis: [{
					type: 'category',
					axisTick: {
						show: false,
						alignWithLabel: false,
						length: 5,
					},
					splitLine: { //网格线
						"show": false
					},
					inverse: 'true', //排序
					axisLine: {
						show: true,
						lineStyle: {
							color: '#333',
						}
					},
					data: ['预测量', '实际量']
				}],
				series: [{
					name: '能耗值',
					type: 'bar',
					label: {
						normal: {
							show: true,
							position: 'right',
							offset: [-50, 0],
							formatter: '{c}',
							textStyle: {
								color: '#fff' //color of value
							}
						}
					},
					itemStyle: {
						normal: {
							show: true,
							color: function (params) {
								var colorArray = [{
									top: '#7aa1f8',
									bottom: '#5888f6'
								}, {
									top: '#febc74',
									bottom: '#f9a347'
								}];

								let num = colorArray.length;
								return {
									type: 'linear',
									colorStops: [{
										offset: 0,
										color: colorArray[params.dataIndex % num].bottom
									}, {
										offset: 1,
										color: colorArray[params.dataIndex % num].top
									}, {
										offset: 0,
										color: colorArray[params.dataIndex % num].bottom
									}, {
										offset: 1,
										color: colorArray[params.dataIndex % num].top
									}],
									//globalCoord: false
								}
							},
							barBorderRadius: [0, 100, 100, 0],
							borderWidth: 0,
							borderColor: '#333',
						}
					},
					barGap: '0%',
					barCategoryGap: '50%',
					data: [1600, 1120]
				}]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		// 圆形波浪
		liquidfillBar: function (Obj) {
			var defaultObj = {
				title: [{
					text: '1512',
					left: '24%',
					top: '70%',
					textAlign: 'center',
					textStyle: {
						fontWeight: 'normal',
						color: '#febc74',
						fontSize: 20,
						textAlign: 'center',
					},
					subtext: '未来3天（kwh）',
					subtextStyle: {
						color: '#333'
					}
				}, {
					text: '2618',
					left: '74%',
					top: '70%',
					textAlign: 'center',
					textStyle: {
						fontWeight: 'normal',
						color: '#89f5f1',
						fontSize: 20,
						textAlign: 'center',
					},
					subtext: '未来3天（kwh）',
					subtextStyle: {
						color: '#333'
					}
				}],
				series: [{
					type: 'liquidFill',
					data: [0.4],
					direction: 'right', //波浪方向或者静止
					radius: '40%',
					// 水球颜色
					color: ['#febc74'],
					center: ['25%', '45%'], //水球位置
					// outline  外边
					outline: {
						// show: false
						borderDistance: 0, //内环padding值
						itemStyle: {
							borderWidth: 3, //圆边线宽度
							borderColor: '#febc74',
						},
					},
					label: {
						normal: {
							formatter: '', //重置百分比字体为空
							// textStyle: {
							color: 'red',
							insideColor: '#febc74',
							fontSize: 10
							// }
						}
					},
					// 内图 背景色 边
					backgroundStyle: {
						color: '#fff',
						// borderWidth: 5,
						// borderColor: 'red',
					}
				}, {
					type: 'liquidFill',
					data: [0.6],
					direction: 'right', //波浪方向或者静止
					radius: '40%',
					// 水球颜色
					color: ['#89f5f1'],
					center: ['75%', '45%'], //水球位置
					// outline  外边
					outline: {
						// show: false
						borderDistance: 0, //内环padding值
						itemStyle: {
							borderWidth: 3, //圆边线宽度
							borderColor: '#89f5f1',
						},
					},
					label: {
						normal: {
							formatter: '', //重置百分比字体为空
							// textStyle: {
							color: 'red',
							insideColor: '#89f5f1',
							fontSize: 10
							// }
						}
					},
					// 内图 背景色 边
					backgroundStyle: {
						color: '#fff',
						// borderWidth: 5,
						// borderColor: 'red',
					}
				}]
			};

			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},


		//仪表盘
		dashboard: function (Obj) {

			var opstions = $.extend(true, {
				value: 20,
				title: "在线率",
				color: "bule"
			}, Obj);

			var barColor;


			switch (opstions.color) {
				case "bule":
					barColor = [{
						offset: 0,
						color: '#67b2f0'
					}, {
						offset: 1,
						color: '#3ba5fb'
					}];
					break;
				case "green":
					barColor = [{
						offset: 0,
						color: '#59dd94'
					}, {
						offset: 1,
						color: '#0ad264'
					}];
					break;
			}

			var defaultObj = {
				angleAxis: {
					show: false,
					max: 100 * 360 / 250, //-35度到215度，二者偏移值是270度除360度
					type: 'value',
					startAngle: 215, //极坐标初始角度
					splitLine: {
						show: false
					}
				},
				barMaxWidth: 10, //圆环宽度
				radiusAxis: {
					show: false,
					type: 'category',
				},
				//圆环位置和大小
				polar: {
					center: ['50%', '60%'],
					radius: '110'
				},
				series: [{
					type: 'bar',
					data: [{ //上层圆环，显示数据
						value: opstions.value,
						itemStyle: {
							color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1, //从左到右 0-1
								y2: 0,
								colorStops: barColor,
							},
						},
					}],
					barGap: '-100%', //柱间距离,上下两层圆环重合
					coordinateSystem: 'polar',
					roundCap: true, //顶端圆角
					z: 2 //圆环层级，同zindex
				},
				{ //下层圆环，显示最大值
					type: 'bar',
					data: [{
						value: 100,
						itemStyle: {
							color: '#e9e9e9'
						}
					}],
					barGap: '-100%',
					coordinateSystem: 'polar',
					roundCap: true,
					z: 1
				},
				//仪表盘
				{
					name: 'AQI',
					type: 'gauge',
					startAngle: 215, //起始角度，同极坐标
					endAngle: -35, //终止角度，同极坐标
					axisLine: {
						show: false,
					},
					splitLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					},
					splitLabel: {
						show: false
					},
					pointer: {
						show: false
					},
					title: {
						left: 'center',
						top: '29%', //top待调整
						color: '#5d5c5a',
						fontSize: 28,
						fontWeight: 500,
						"offsetCenter": ["-10%", "40%"],
						rich: {
							a: {
								fontWeight: 'normal',
								fontSize: 14,
								lineHeight: 40,
								color: '#505050',
								padding: [20, 0, 0, 10],
								textAlign: "center",

							}
						}
					},
					detail: {
						formatter: function (e) {
							return '%';
						},
						color: '#5d5c5a',
						fontSize: 12,
						"offsetCenter": ["50%", "0%"],

					},
					data: [{
						value: opstions.value,
						name: opstions.value + '\n' + '{a|' + '在线率' + '}'
					}]
				}
				]
			};


			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//横向多色柱状图
		colorbar: function (Obj) {
			var defaultObj = {
				color: ['#0973f5', '#3beac8', '#f58336', '#8f99f4', '#febd42'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						lineStyle: {
							opacity: 0.6
						}
					},
					confine: true
				},

				legend: {
					orient: 'horizontal',
					right: "3%",
					top: "12px",
					textStyle: {
						color: '#585858',
						fontSize: 12,

					},
					itemWidth: 10,
					itemHeight: 10
				},

				grid: {
					left: '3%',
					right: '5%',
					bottom: '5%',
					top: '60px',
					containLabel: true,
					z: 22
				},
				xAxis: [{
					type: 'category',
					gridIndex: 0,
					data: [],
					axisTick: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#d5d8d5'

						}
					},
					axisLabel: {
						interval: 0,
						color: '#333333',
						margin: 10,
						textStyle: {
							fontSize: 12
						}
					}
				}],
				yAxis: [{
					type: 'value',
					//   name: "单位:户",
					nameTextStyle: {
						color: "rgb(170,170,170)"
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					gridIndex: 0,
					splitLine: {
						show: false

					},
					axisLabel: {
						formatter: '{value}',
						color: '#333333',
						margin: 10,
						textStyle: {
							fontSize: 12
						}
					}
				}],
				series: []
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}

			this.on('click', function (params) {
				//option.xAxis[params.seriesIndex].data[param.dataIndex];
				console.log(params)
				//var name = parseInt(params.name);
			});

			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//版本统计横向柱状图
		bbtjbar: function (Obj) {

			var opstions = $.extend(true, {
				yAxis: [],
				data: []
			}, Obj);


			var zoomShow = opstions.yAxis.length > 6 ? true : false;

			var endp;
			if (zoomShow) {
				endp = parseInt((1 - 6 / opstions.yAxis.length) * 100)
			}




			var defaultObj = {
				color: ['#5888f6', '#69e3df', '#f9a347'],
				tooltip: {
					trigger: 'axis',
					confine: true,
					formatter: "{b} :<br/> {c}&nbsp;台",
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					show: false,
					orient: 'horizontal',
					x: 'right',
					y: "3%",
					itemWidth: 20,
					itemHeight: 10
				},
				grid: {
					top: '8%',
					left: '4%',
					right: '8%',
					bottom: '2%',
					containLabel: true
				},
				xAxis: [{
					type: 'value',
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {

						lineStyle: {
							color: "#bebebe"
						}
					},

					splitLine: {
						show: true,
						lineStyle: {
							color: "#efefef"
						}
					}

				}],
				yAxis: [{
					name: "",
					nameTextStyle: {
						fontSize: 12,
						color: "#7a7a7a"
					},


					type: 'category',
					data: opstions.yAxis,
					axisLabel: {
						show: true,
						interval: 0,
						textStyle: {
							fontSize: 12,
							color: "#7a7a7a",
							lineHeight: 20,
						}
					},
					axisLine: {
						lineStyle: {
							color: "#bebebe"
						}
					},
					axisTick: {
						show: false
					},
					inverse: true

				}],
				series: [{
					type: 'bar',
					barWidth: 10,
					itemStyle: {
						normal: {
							barBorderRadius: [0, 5, 5, 0],
							color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
								offset: 0,
								color: '#64b1f1'
							}, {
								offset: 1,
								color: '#36a3fc'
							}], false)
						}
					},

					data: opstions.data,
					label: {
						normal: {
							show: true,
							position: "right",
							textStyle: {
								color: "#7a7a7a",
								fontSize: 12
							}
						}
					}
				}],
				dataZoom: [{
					show: zoomShow, // 为true 滚动条出现
					yAxisIndex: [0],
					realtime: true,
					type: 'slider', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
					// height: 20, // 表示滚动条的高度，也就是粗细
					start: 100, // 表示默认展示20%～80%这一段。
					end: zoomShow ? endp : 0
				},
				{
					disabled: !zoomShow,
					type: 'inside',  //内置滑动，随鼠标滚轮展示
					yAxisIndex: [0]
				}]
			};

			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//趋势折线图
		qsline: function (Obj) {
			var defaultObj = {
				tooltip: {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					top: '56',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07"],
					axisLabel: {
						show: true,
						textStyle: {
							color: '#7d7d7d'
						}
					},
					axisLine: {
						lineStyle: {
							color: "#c0c0c0",
							width: 1
						}
					}
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						show: true,
						textStyle: {
							color: '#7d7d7d'
						}
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: "#3cceff",
							opacity: 0.3,
							width: 1
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: "#efefef"
						}
					}
				},
				legend: {
					data: ['风险', '事件'],
					itemWidth: 15,
					itemHeight: 4,
					itemGap: 10,
					right: 20,
					top: 14,
					icon: 'stack',
					textStyle: {
						fontSize: 12,
						color: '#787777'
					}
				},

				series: [{
					name: "风险",
					data: [200, 500, 300, 230, 700, 400, 900],
					type: 'line',
					symbolSize: 4, //折线点的大小
					lineStyle: {
						normal: {
							color: "#fc767e",
							width: 2
						}
					},
					itemStyle: {
						normal: {
							label: { show: false },
							color: "#fc767e"
						}
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(252, 118, 126,0.4)'
						}, {
							offset: 1,
							color: 'rgba(252, 118, 126,0)'
						}])
					}
				},
				{
					name: "事件",
					data: [120, 130, 250, 490, 600, 200, 560],
					type: 'line',
					symbolSize: 4, //折线点的大小
					lineStyle: {
						normal: {
							color: "#2ea0fe",
							width: 2
						}
					},
					itemStyle: {
						normal: {
							label: { show: false },
							color: "#2ea0fe"
						}
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(46, 160, 254,0.4)'
						}, {
							offset: 1,
							color: 'rgba(46, 160, 254,0)'
						}])
					}
				}]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;
		},

		//统计饼状图
		tjPie: function (Obj) {
			function formatterPie(data) {
				let piedata = [];

				$.each(data, function (ind, val) {
					piedata.push({ value: val["OSDevCount"], legendname: val["OSVersion"], name: val["OSVersion"] })
				});

				return piedata;
			};

			var tjdata = formatterPie(Obj);

			var defaultObj = {
				color: ["#42da86", "#66aef8", "#08f0ed", "#fc767e", "#f9d54e", "#8d7fec", "#5085f2", "#e75fc3"],

				tooltip: {
					trigger: 'item',
					formatter: function (parms) {
						//console.log(parms)
						var str = parms.marker + "" + parms.data.legendname + "</br>" +
							"数量：" + parms.data.value + "</br>" +
							"占比：" + parms.percent + "%";
						return str;
					}
				},
				legend: {
					type: "scroll",
					orient: 'vertical',
					left: '70%',
					align: 'left',
					top: 'middle',
					textStyle: {
						color: '#8C8C8C',
					},
					height: 250,
					formatter: function (parms) {
						//console.log(parms);
						return parms
					}
				},
				series: [
					{
						name: '标题',
						type: 'pie',
						center: ['35%', '50%'],
						radius: ['40%', '65%'],
						clockwise: false, //饼图的扇区是否是顺时针排布
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: true,
								position: 'outter',
								formatter: function (parms) {
									return parms.data.legendname
								}
							}
						},
						labelLine: {
							normal: {
								length: 5,
								length2: 3,
								smooth: true,
							}
						},
						data: tjdata
					}
				]
			};
			$.extend(true, defaultObj, Obj);
			var arr = new Array();
			var O = null;

			if (this.length == 0) {
				return console.log("jq is not find element");
			}
			$.each(this, function () {
				O = echarts.init(this);
				O.setOption(defaultObj);
				O.ele = this;
				arr.push(O);
			});
			return arr;

		},


		//使用率横向柱状图(非echarts)
		zybar: function (options) {
			options = $.extend({}, options);
			var _this = $(this);
			function colorbg(val) {
				if (val >= 90) {
					return "warning-bg"
				} else if (val < 90 && val >= 80) {
					return "orange-bg"
				} else {
					return ""
				}
			};
			$("#cpuUsage", _this).removeClass("").addClass(colorbg(options["CpuUsage"])).find(".bar-percentage").html(options["CpuUsage"] + "%").end().find(".bar-inner").css({ "width": options["CpuUsage"] + "%" });
			$("#memUsage", _this).removeClass("").addClass(colorbg(options["MemUsage"])).find(".bar-percentage").html(options["MemUsage"] + "%").end().find(".bar-inner").css({ "width": options["MemUsage"] + "%" });
			$("#diskUsage", _this).removeClass("").addClass(colorbg(options["DiskUsage"])).find(".bar-percentage").html(options["DiskUsage"] + "%").end().find(".bar-inner").css({ "width": options["DiskUsage"] + "%" });

			return _this;
		},

		//离线终端列表
		onlinelist: function (options) {
			options = $.extend({}, options);
			var _this = $(this);
			var dom = "";

			$.each(options, function (ind, val) {
				dom += '<li class="rank-item"><i class="rank-number">' + (ind - 0 + 1) + '</i><div class="rank-msg"><div class="rank-name">' + val["UserRealName"] + '</div><div class="rank-ip">（' + val["DevIP"] + '）</div></div><div class="attach">' + val["OfflineDays"] + '天</div><div class="arrow"></div></li>'
			});

			_this.html(dom);
			return _this;

		},

		//风险用户
		setriskuser: function (options) {
			var _this = $(this);

			//渲染用户列表
			function userlist(id) {
				var listdom = "";
				$.each(options[id], function (ind, item) {
					listdom += '<li class="rank-item"><i class="rank-number">' + (ind + 1) + '</i><div class="rank-msg"><div class="rank-name">' + item["UserRealName"] + '</div></div><div class="arrow arrow-top"></div><div class="attach">' + item["RiskEventCount"] + '条</div></li>'
				});

				$("#riskUserlist", _this).html(listdom)
			};

			$(".toggle-btn .toggle-item", _this).on("click", function () {
				if ($(this).hasClass("selected")) {
					return;
				} else {
					$(this).addClass("selected").siblings(".toggle-item").removeClass("selected");
					userlist($(this).data("for"));
				}
			});

			//默认加载项
			userlist("RiskUserRankList");
			return _this;
		}




	})
})(jQuery);
