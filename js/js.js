 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    //echarts_1()  //获取折线图
    //echarts_2()  //获取柱状图
    //echarts_3()  //获取饼状图

/**
   * 获取折线图
   */
function echarts_1() {
  fetch('http://127.0.0.1:5000/zhexiandata')
    .then(response => response.json())
    .then(data => {
        console.log(data['data'])
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));
        option = {
          tooltip: {
          trigger: 'axis',
          axisPointer: {type: 'shadow'},},

        grid: {
              left: '0',
              top: '30',
              right: '10',
              bottom: '-20',
          containLabel: true},

        legend: {
          data: [data['data'][0]['category'], data['data'][1]['category'],data['data'][2]['category'],data['data'][3]['category'],
                data['data'][4]['category'], data['data'][5]['category'],data['data'][6]['category'],data['data'][7]['category']],
          right: 'center',
          top:0,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
 
        xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLabel:  {
                rotate: -90,
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize:14,
                },
              },
              axisLine: {
              lineStyle: { 
                color: 'rgba(255,255,255,.1)'}
              },
              data: data['date']
            }, 
            {
              axisPointer: {show: false},
              axisLine: {  show: false},
              position: 'bottom',
          offset: 20,}],
 
        yAxis: [{
          type: 'value',
          axisTick: {show: false},
          // splitNumber: 6,
          axisLine: {
            lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
          axisLabel:  {
          formatter: "{value}",
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize:14,},
          },
          splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }}],
        series: [
        //第一类
        {
              name: data['data'][0]['category'],
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
              normal: {
                color: 'rgba(228, 228, 126, 1)',
                width: 2}
              },
              areaStyle: {
              normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(228, 228, 126, .2)'
                 }, {
                     offset: 1,
                     color: 'rgba(228, 228, 126, 0)'
                 }], false),
                 shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
              },
              itemStyle: {
              normal: {
                color: 'rgba(228, 228, 126, 1)',
                borderColor: 'rgba(228, 228, 126, .1)',
                borderWidth: 12}
              },
              data: data['data'][0]['num']
        }, 
 
        //第二类
        {
          name: data['data'][1]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][1]['num']
        }, 
        //第三类
        {
          name: data['data'][2]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][2]['num']
        }, 
        //第4类
        {
          name: data['data'][3]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][3]['num']
        }, 
        //第5类
        {
          name: data['data'][4]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][4]['num']
        }, 
        //第6类
        {
          name: data['data'][5]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][5]['num']
        }, 
        //第7类
        {
          name: data['data'][6]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][6]['num']
        }, 
        //第8类
        {
          name: data['data'][7]['category'],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            width: 2}
          },
          areaStyle: {
          normal: {
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgba(228, 228, 126, .2)'
             }, {
                 offset: 1,
                 color: 'rgba(228, 228, 126, 0)'
             }], false),
             shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
          normal: {
            color: 'rgba(228, 228, 126, 1)',
            borderColor: 'rgba(228, 228, 126, .1)',
            borderWidth: 12}
          },
          data: data['data'][7]['num']
        }, 
      ]};
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
        myChart.resize();});
    }) 
}
  /**
   * 获取来源柱状图
   */
function echarts_2() {
      fetch('http://127.0.0.1:5000/api/getTopOrigins')
        .then(response => response.json())
        .then(data => {
          // 处理接收到的数据
          console.log(data["data"]);
          //const categoryList = data.map(item => item.category);
          const categoryArray = data["data"].map(item => item.category);

// 输出 categoryArray
          console.log(categoryArray);
          // 输出 categoryList
          //console.log(categoryList);
          // 在这里你可以根据需要对数据进行进一步的处理和展示
          // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts4'));
      var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
      option = {
              grid: {
                  left: '2%',
                  top:'1%',
                  right: '5%',
                  bottom: '0%',
                  containLabel: true
              },
              xAxis: [{
                  show: false,
              }],
              yAxis: [{
                      axisTick:'none',
                      axisLine:'none',
                      offset:'7',
                      axisLabel: {
                              textStyle: {
                                  color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: data["data"].map(item => item.category)

                  }, {
                      axisTick:'none',
                      axisLine:'none',
                      axisLabel: {
                              textStyle: {
                                color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: data["data"].map(item => item.num)

                       },{
                      name:'单位：件',
                          nameGap:'50',
                          nameTextStyle:{
                            color: 'rgba(255,255,255,.6)',
                              fontSize:'16',
                          },
                      axisLine:{
                        lineStyle:{
                          color:'rgba(0,0,0,0)'
                        }
                      },
                      data: [],
              }],
              series: [{
                  name: '条',
                  type: 'bar',
                  yAxisIndex: 0,
                  data: data["data"].map(item => item.percent),
                  label:{
                        normal:{
                          show:true,
                          position:'right',
                          formatter:function(param){
                            return param.value + '%';
                          },
                          textStyle:{
                            color: 'rgba(255,255,255,.8)',
                             fontSize:'12',
                          }
                        }
                  },
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                  offset: 0,
                                  color: '#03c893'
                              },
                              {
                                  offset: 1,
                                  color: '#0091ff'
                              }
                          ]),
                          barBorderRadius: 15,
                      }
                  },
                  z: 2
              }, {
                  name: '白框',
                  type: 'bar',
                  yAxisIndex: 1,
                  barGap: '-100%',
                  data: [99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                        color:'rgba(0,0,0,.2)',
                          barBorderRadius:15,
                      }
                  },
                  z: 1
              }]
          };
   

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
      })
      .catch(error => console.error(error));
      
  }
  /**
   * 获取类别饼状图
   */
function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
  
      fetch('http://127.0.0.1:5000/api/getCategories')
        .then(response => response.json())
        .then(data => {
          var myChart = echarts.init(document.getElementById('echarts6'));  
          console.log(data);
    option = {
    title:{
      text:'5132',
      subtext:'总体',
      x:'center',
      y:'40%',
      textStyle:{
          color:'#fff',
          fontSize:22,
          lineHeight:10,
      },
      subtextStyle: {
          color:'#90979c',
          fontSize:16,
          lineHeight:10,

      },
  },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 700,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '80%','80%','50%'],
        center: ['50%', '50%'],
        color: ['red', 'orange', 'yellow', 'green', '#FF7F50', '#8A2BE2', '#32CD32', '#FFD700'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: data["data"].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}条}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 14,
                        height: 44
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        }
    }]
    };
 

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
  })
    
}

})



		
		
		


		



















