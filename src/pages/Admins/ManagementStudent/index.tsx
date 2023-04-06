import type { ProColumnType, ProFormInstance } from '@ant-design/pro-components';
import {
  ProTable,

} from '@ant-design/pro-components';
import { Button,Modal,Form,Input,DatePicker } from 'antd';
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
      name: `学生${i}`,
      aftertime: (1661136793649 + i * 10000),
      beforetime: 1661136793649 + i * 1000,
      desc: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  return data;
};



const DynamicSettings = () => {
  const [visible,setVisible] = useState<boolean>(false);
  const columns: ProColumnType<DataType>[] = [
    {
      title: '学生姓名',
      dataIndex: 'name',
    },
    {
      title: '学生入学时间',
      dataIndex: 'beforetime',
      valueType: 'date',

    },
    {
      title: '学生预计毕业时间',
      dataIndex: 'aftertime',
      valueType:'date'
    },
    {
        title:'学生描述',
        dataIndex:'desc',
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
    headerTitle: '学生管理',
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
        title='编辑学生信息'
        visible={visible}
        onCancel={()=>{setVisible(false)}}
        onOk={onFinish}
        >
            <Form
            {...formItemLayout}
            form={form}
            >
                <Item label='学生名称' name='name' required>
                    <Input placeholder='请输入学生姓名'/>
                </Item>
                <Item label='学生预计毕业时间' name='aftertime' required>
                <DatePicker showTime placeholder='请输入学生预计毕业时间' />
                </Item>
                <Item label='学生描述' name='desc' >
                    <Input.TextArea placeholder='请输入学生描述'/>
                </Item>
            </Form>
        </Modal>
        </>
  );
};

export default DynamicSettings;