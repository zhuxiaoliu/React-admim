/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 09:43:27
 */
import React, { Suspense } from "react";
import { Spin } from "antd";
const lazyLoad =(Comp)=>{
  return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);

}
export default lazyLoad;