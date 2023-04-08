import React from 'react';
import {
  Button,
  Input,
  Form,
  Rate,
  Row,
  Col,
} from 'antd';


const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

export default () => {
    const [form] = Form.useForm()
  return <>
  <Row  gutter={24}>
      
  <Col offset={4}>
  <h3>请对教师进行评分</h3>
  </Col>
  </Row>
  <Form
    form={form}
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
      <Form.Item name="teacherName" label='老师名称' required>
        <Input placeholder='请输入老师名称' />
      </Form.Item>
    <Form.Item name="level" label="评分等级" required>
      <Rate allowHalf count={10} />
    </Form.Item>
    <Form.Item name="desc" label="描述" >
      <Input.TextArea placeholder='请输入描述'  />
    </Form.Item>
    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Button type="primary" htmlType="submit">
       提交
      </Button>
      <Button style={{marginLeft:20}} onClick={()=>{

      }}>取消</Button>
    </Form.Item>
  </Form>
  </>
}
