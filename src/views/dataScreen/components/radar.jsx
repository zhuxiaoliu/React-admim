/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-10-04 23:44:58
 * 雷达图
 */

import React,{useRef,useEffect} from 'react';
import * as echarts from 'echarts';
const Radar = () =>{
    const ref = useRef(null);
    let mapInstance = null;
    const option = {
        radar: {
          splitArea: {
                  show: true,
                  areaStyle: {
                      color: ["#147274","#127879","#156D6E","#165659","#174246"], // 图表背景的颜色
                  }
              },
            splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: "#167A7C", // 设置网格的颜色
                    },
                },
          indicator: [
            { name: '[超速]', max: 2000 },
            { name: '[违停]', max: 1600 },
            { name: '[闯红灯]', max: 1600 },
            { name: '[闯禁行]', max: 800 },
            { name: '[压线]', max: 600 }
          ],
          name: {
            textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
            }
        }
        },
        series: [
          {
            type: 'radar',
            areaStyle: { color: "#F1E78F",opacity:0.4 }, //雷达覆盖区域背景颜色
            lineStyle: {color: "#F1E78F"},
            symbolSize: 6,
            symbolColor: "red",
            label: {
                  show: true,
                  formatter: function (params) {
                      return params.value;
                  },
              },
            data: [
              {
                value: [1600, 500, 900, 200, 100]
              }
            ]
          }
        ],
      };
    //绘制Echarts
    const initRadar=()=>{
        mapInstance = echarts.init(ref.current);
        mapInstance.setOption(option);
     };
    
    useEffect(()=>{
      initRadar();
    },[]);
    return  <div style={{ width: "100%", height: "100%" }} ref={ref}></div>
    
}
export default Radar;