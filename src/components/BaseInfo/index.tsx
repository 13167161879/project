import React from 'react';
import {  Descriptions } from 'antd';

const BaseInfo: React.FC = (props:any) => {
const {descList} = props
 return <Descriptions title="基本信息" bordered>
   {descList?.map((item:any):any=>{
       return <Descriptions.Item label={item?.label} key={item?.label}>{item?.value}</Descriptions.Item>
   })}
  </Descriptions>
};

export default BaseInfo;