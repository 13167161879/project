import React from 'react';
import {Result,Button} from 'antd';
import {history} from 'umi'
 export default()=>{
     const hanldGoBack=()=>{
        history.push('/')
     }
    return  <Result
    status="404"
    title="404"
    subTitle="你找的页面不存在请检查地址是否有误"
    extra={<Button type="primary" onClick={hanldGoBack}>返回首页</Button>}
  />
}