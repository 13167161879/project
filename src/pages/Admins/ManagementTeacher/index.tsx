import type { ProColumnType, ProFormInstance } from '@ant-design/pro-components';
import {
  ProTable,

} from '@ant-design/pro-components';
import { Button,Modal,Form,Input,Rate } from 'antd';
import { useRef, useState } from 'react';


type DataType = {
  age: number;
  address: string;
  name: string;
  time: number;
  key: number;
  description: string;
};

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const {Item} = Form

const genData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data:any = [];
  for (let i = 1; i <= total; i += 1) {
    data.push({
      key: i,
      name: `老师${i}`,
      level: i>5?3:2.4,
      time: 1661136793649 + i * 1000,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  return data;
};



const DynamicSettings = () => {
  const [visible,setVisible] = useState<boolean>(false);
  const columns: ProColumnType<DataType>[] = [
    {
      title: '老师姓名',
      dataIndex: 'name',
    },
    {
      title: '教评等级',
      dataIndex: 'level',
      valueType: 'number',
    },
    {
      title: '教评描述',
      dataIndex: 'description',
      search:false,
    },
    {
        title:'入职时间',
        dataIndex:'time',
        valueType:'date'
    },
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: () => [
        <Button key="delete">删除</Button>,
        <Button onClick={()=>{
            setVisible(true)
        }}>编辑</Button>
      ],
    },
  ];
  
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
    headerTitle: '教师管理',
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

  const ref = useRef<ProFormInstance>();
const [form]=Form.useForm()
  const [config] = useState<any>(initData);




  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
    ellipsis: config.ellipsis,
  }));

  const onFinish=()=>{
// form.
  }

  return ( <><ProTable
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
        <Modal
        title='编辑老师信息'
        visible={visible}
        onCancel={()=>{setVisible(false)}}
        onOk={onFinish}
        >
            <Form
            {...formItemLayout}
            form={form}
            >
                <Item label='教师名称' name='name' required>
                    <Input/>
                </Item>
                <Item label='教师等级' name='level' required>
                <Rate />
                </Item>
                <Item label='教评描述' name='desc' required>
                    <Input.TextArea placeholder='请输入教评描述'/>
                </Item>
            </Form>
        </Modal>
        </>
  );
};

export default DynamicSettings;