/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-10-04 21:10:06
 */
import React from "react";
import plane from '@/assets/images/dataScreen/plane.png';
import railway from '@/assets/images/dataScreen/railway.png';
import waterway from '@/assets/images/dataScreen/waterway.png';

const SummaryCard =()=>{
    return   <div className="summaryCard">
                <div className="title">
                    <div className="way">运输方式</div>
                    <div className="passengerTraffic">客运量</div>
                    <div className="freight">货运量</div>
                </div>
                <div className="summary-body">
                    <div className="eachLine">
                        <div className="way"><img className="imageItem" src={plane}></img>航空运输</div>
                        <div className="passengerTraffic item people-num">4347.2万人</div>
                        <div className="freight item weight-num">1427.2万吨</div>
                    </div>
                    <div className="eachLine">
                        <div className="way"><img className="imageItem" src={waterway}></img>水路运输</div>
                        <div className="passengerTraffic item people-num">2147.2万人</div>
                        <div className="freight item weight-num">327.2万吨</div>
                    </div>
                    <div className="eachLine">
                        <div className="way"><img className="imageItem" src={railway}></img>铁路运输</div>
                        <div className="passengerTraffic item people-num">7557.2万人</div>
                        <div className="freight item weight-num">2427.2万吨</div>
                    </div>
                </div>
        </div>
}
export default SummaryCard;