/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-10-03 15:20:30
 */
import React,{useRef,useEffect} from 'react';
import {getRoadBar} from '@/api/dataScreen';
import * as echarts from 'echarts';
const Bar=()=>{
    const ref = useRef(null);
    let mapInstance = null;
    const option = {
        grid: {
            left:40,
            right:10,
            top:50,
            bottom:40,
            },
        legend: {
            align: 'left',
            y: '10',
            x: '48',
            textStyle:{
                fontSize: 14,//字体大小
                color: '#fff'//字体颜色
    
            }
        },
        tooltip: {  //鼠标悬停时显示对应数据
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
        dataset: {
          dimensions: ['year', '高速公路', '城镇公路'],
          source: []
        },
        xAxis: { 
            type: 'category',
            axisTick:{show: false},
            axisLabel: {
                textStyle: {
                color:"#fff",
                fontSize: 14
                }
          }
        },
        yAxis: {
            splitLine: {show: false},
            axisLabel: {
                textStyle: {
                color:"#fff",
                fontSize: 14
                }
          }
        },
        series: [
          { type: 'bar',
            barWidth: 10, // 柱子宽度
            itemStyle: {
                  normal: {
                    borderRadius: [10, 10, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: "#595BA6" // 0% 处的颜色
                    }, {
                      offset: 0.2,
                      color: "#32488E" // 20% 处的颜色
                    },
                     {
                      offset: 0.5,
                      color: "#10899C" // 50% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#3BB7B9" // 100% 处的颜色
                    }], false)
                  }
                }
            },
          { type: 'bar',
            barWidth: 10, // 柱子宽度
            itemStyle: {
                  normal: {
                    borderRadius: [10, 10, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: "#7D3912" // 0% 处的颜色
                    }, {
                      offset: 0.2,
                      color: "#7F3C13" // 20% 处的颜色
                    },
                     {
                      offset: 0.5,
                      color: "#B45F0E" // 50% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#EA7B07" // 100% 处的颜色
                    }], false)
                  }
        }}
        ],
      };
    const getBarData =() => {
        getRoadBar().then(res=>{
            const data = res.data || [];
            initBar(data);
        })
     };
    //绘制Echarts
    const initBar=(data)=>{
        const source=[];
        data.map(item=>{
            const eachItem={year:item.year,'高速公路':item.gsgl,'城镇公路':item.czgl}
            source.push(eachItem);
        });
        option.dataset.source = source;
        mapInstance = echarts.init(ref.current);
        mapInstance.setOption(option);
     };
    
    useEffect(()=>{
        getBarData();
    },[]);
    return  <div style={{ width: "100%", height: "100%" }} ref={ref}></div>
}
export default Bar;