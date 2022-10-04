
import React,{useRef,useEffect} from 'react';
import * as echarts from 'echarts';
const Line=()=>{
    const ref = useRef(null);
    let mapInstance = null;
    const option = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        align: 'left',y: '10',x: '48',
        data: ['水路机动客船', '公路营运客车', '铁路营运动车'],
        textStyle:{
          fontSize: 14,//字体大小
          color: '#fff'//字体颜色
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2012', '2014', '2016', '2018', '2020'],
          axisLabel: {
            textStyle: {
            color:"#fff",
            fontSize: 14
            }
      }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            textStyle: {
            color:"#fff",
            fontSize: 14
            }
      }
        }
      ],
      series: [
        {
          name: '水路机动客船',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#F00201'
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#F00201" },
              { offset: 1, color: "#333430" }
              ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [800, 1200, 800, 300,800 ]
        },
        {
          name: '公路营运客车',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            colorL:"#1C9EBA"
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#1C9EBA" },
              { offset: 1, color: "#333430" }
              ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [1200, 400, 1100, 1200, 500]
        },
        {
          name: '铁路营运动车',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            color:"#D3BB4A"
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
              color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#D3BB4A" },
              { offset: 1, color: "#333430" }
              ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [1200, 500, 1100, 800, 900]
        }
      ]
    };
    //绘制Echarts
    const initLine=()=>{
        mapInstance = echarts.init(ref.current);
        mapInstance.setOption(option);
     };
    
    useEffect(()=>{
      initLine();
    },[]);
    return  <div style={{ width: "100%", height: "100%" }} ref={ref}></div>
}
export default Line;