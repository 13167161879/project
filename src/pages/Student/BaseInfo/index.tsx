import React from 'react';
import { Badge, Descriptions } from 'antd';
import BaseInfo from '@/components/BaseInfo/index';


export default ()=>{
    return<>
    <BaseInfo
    descList={[
    {
        label:'学生名称',
        value:'张三'
    },
    {
        label:'学生性别',
        value:'男'
    },
    {
        label:'学生号码',
        value:'1733221'
    },
    ]}
    /></>
};