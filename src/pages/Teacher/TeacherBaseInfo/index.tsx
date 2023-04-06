import React from 'react';
import BaseInfo from '@/components/BaseInfo/index';

export default ()=>{

    return <>
    <BaseInfo
    descList={[
    {
        label:'老师名称',
        value:'王老师'
    },
    {
        label:'老师性别',
        value:'女'
    },
    {
        label:'老师号码',
        value:'2211421'
    },
    ]}
    />
    </>
}