import { DownOutlined } from '@ant-design/icons';
import type { ProColumnType, ProFormInstance } from '@ant-design/pro-components';
import {
  ProTable,
  useDebounceFn,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';


type DataType = {
  age: number;
  address: string;
  name: string;
  time: number;
  key: number;
  description: string;
};

const columns: ProColumnType<DataType>[] = [
  {
    title: '学生姓名',
    dataIndex: 'name',
  },
  {
    title: '教评时间',
    dataIndex: 'time',
    valueType: 'date',
  },
  {
    title: '教评等级',
    dataIndex: 'level',
    valueType: 'number',
    // filters: true,
    // onFilter: true,
 
  },
  {
    title: '教评描述',
    dataIndex: 'description',
    search:false,
    // filters: true,
    // onFilter: true,
 
  },
];

const genData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data:any = [];
  for (let i = 1; i <= total; i += 1) {
    data.push({
      key: i,
      name: `学生${i}`,
      level: i>5?3:2.4,
      time: 1661136793649 + i * 1000,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  return data;
};

const initData = {
  bordered: true,
  loading: false,
  columns,
  pagination: {
    show: true,
    pageSize: 5,
    current: 1,
    total: 100,
  },
  size: 'small',
  expandable: false,
  headerTitle: '教评查询',
  showHeader: true,
  footer: true,
  rowSelection: false,
  scroll: false,
  hasData: true,
  tableLayout: undefined,
  search: {
    show: true,
    span: 12,
    collapseRender: true,
    labelWidth: 80,
    filterType: 'query',
    layout: 'horizontal',
  },
  options: false,
};

const DynamicSettings = () => {
  const ref = useRef<ProFormInstance>();

  const [config, setConfig] = useState<any>(initData);

  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
    ellipsis: config.ellipsis,
  }));

  return (
 
        <ProTable
          {...config}
          formRef={ref}
          pagination={
            config.pagination?.show
              ? config.pagination
              : {
                  pageSize: 5,
                }
          }
          search={config.search?.show ? config.search : {}}
          expandable={
            config.expandable && {
              expandedRowRender: (record: DataType) => <p>{record.description}</p>,
            }
          }
          options={config.options?.show ? config.options : false}
          footer={ false}
          headerTitle={config.headerTitle}
          columns={tableColumns}
          dataSource={genData(config.pagination?.total || 10)}
          scroll={config.scroll}
        />
  );
};

export default DynamicSettings;