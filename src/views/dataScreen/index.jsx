/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-10-03 11:58:35
 */
import React from 'react';
import { useLayoutEffect, useRef } from "react";
import Bar  from './components/bar';
import Line from './components/line';
import SummaryCard from './components/summaryCard';
import ChinaMap from './components/chinaMap';
import Radar from './components/radar';
import PoliceBar from  './components/policeBar';
import './index.less';
const DataScreen =()=>{
    const dataScreenRef = useRef();
    /* 浏览器监听 resize 事件 */
	const resize = () => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		}
	};
    	/* 根据浏览器大小推断缩放比例 */
	const getScale = (width = 1920, height = 1080) => {
		let ww = window.innerWidth / width;
		let wh = window.innerHeight / height;
		return ww < wh ? ww : wh;
	};
    useLayoutEffect(() => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
			dataScreenRef.current.style.width = `1920px`;
			dataScreenRef.current.style.height = `1080px`;
		}
		// 为浏览器绑定事件
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);
    return <div className='dataScreen-container'>
        <div className='dataScreen' ref={dataScreenRef}>
            <div className='headTab'>
                <p>交通云实时数据监控平台</p>
            </div>
            <div className='main-content'>
                <div className='datascreen-container content-left'>
                    <div className='bar1'>
                        <div className="bar1-before" />
                            <Bar></Bar>
                        <div className="bar1-after" />
                    </div>
                    <div className='line2'>
                    <div className="line2-before" />
                            <Line></Line>
                        <div className="line2-after" />
                    </div>
                    <div className='table3'>
                        <SummaryCard></SummaryCard>
                    </div>
                    
                </div>
                <div className='datascreen-container content-middle'>
                    <ChinaMap></ChinaMap>
                </div>
                <div className='datascreen-container content-right'>
                    <div className='right-item'>
                        <div className='right-title'>违法数量和类型分布</div>
                        <Radar></Radar>
                    </div>
                    <div className='right-item' style={{height:"40%"}}>
                    <div className='right-title'>警力分布</div>
                        <PoliceBar></PoliceBar>
                    </div>
                </div>
            </div>


        </div>

    </div>
    
}
export default DataScreen;