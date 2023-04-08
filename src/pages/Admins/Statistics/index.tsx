import { Line } from '@ant-design/charts';
import React, { useState, useEffect } from 'react';


const Page: React.FC = () => {
  const data = [
    { year: '2009', value: 3 },
    { year: '2010', value: 4 },
    { year: '2011', value: 3.5 },
    { year: '2012', value: 5 },
    { year: '2013', value: 4.9 },
    { year: '2014', value: 3 },
    { year: '2015', value: 3.4 },
    { year: '2016', value: 3.6 },
    { year: '2017', value: 4.1 },
    { year: '2018', value: 4.2 },
    { year: '2019', value: 4.3},
    { year: '2020', value: 4.4 },
    { year: '2021', value: 4.5 },
    { year: '2022', value: 4.1 },
    { year: '2023', value: 4.9},
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  const [datas, setDatas] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setDatas(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const configs = {
    data:datas,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  useEffect(() => {
    asyncFetch();
  }, [])
  return <div>
      <h3>全校教师评级平均分统计</h3>
      <Line {...config} />
      <h3>全校学生人数统计</h3>
      <Line {...configs} />;
  </div>;
};
export default Page;