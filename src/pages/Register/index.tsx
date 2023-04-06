
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Modal
} from 'antd';
import {
    ProFormText,
    LoginForm  } from '@ant-design/pro-components';
import React, { useState } from 'react';
import './index.less';
import{ history} from 'umi'
const { Option } = Select;




const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 11 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [visible,setVisible]= useState<boolean>(false)

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


;

  return (
    <>
    <h1 style={{display:'flex',justifyContent:'center',alignItem:'center'}}>注册</h1>
    <Form
    // style={{width:'100%'}}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
      >

          <Form.Item
              name="nickname"
              label="账号"
              // tooltip="What do you want others to call you?"
              rules={[{ required: true, message: '请输入您的账号!', whitespace: true }]}
          >
              <Input />
          </Form.Item>
          <Form.Item
              name="password"
              label="密码"
              rules={[
                  {
                      required: true,
                      message: '请输入密码!',
                  },
              ]}
              hasFeedback
          >
              <Input.Password />
          </Form.Item>

          <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[
                  {
                      required: true,
                      message: '请确认您的密码！',
                  },
                  ({ getFieldValue }: any) => ({
                      validator(_: any, value: any) {
                          if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                          }
                          return Promise.reject(new Error('两次输入的密码不一致!'));
                      },
                  }),
              ]}
          >
              <Input.Password />
          </Form.Item>

          <Form.Item
              name="phone"
              label="电话号码"
              rules={[{ required: true, message: '请输入您的电话号码!' }]}
          >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
              name="gender"
              label="性别"
              rules={[{ required: true, message: '请选择您的性别!' }]}
          >
              <Select placeholder="请选择您的性别!">
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
              </Select>
          </Form.Item>
          <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                  {
                      validator: (_: any, value: any) => value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意条款')),
                  },
              ]}
              {...tailFormItemLayout}
          >
              <Checkbox>
                  我已阅读并 同意<span onClick={()=>{setVisible(true)}} style={{color:'blue',cursor:'poinet'}}>《注册条款》</span>
              </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                  注册
              </Button>
              <Button 
              style={{marginLeft:'20px'}}
              onClick={()=>{
                  history.push('/login');
                  }}>
                      取消
                      </Button>
          </Form.Item>
      </Form>
      <Modal
      width={900}
      border
      title='注册条款'
      visible={visible}
      onOk={()=>{
          setVisible(false)
      }}
      onCancel={()=>{
          setVisible(false)
      }}
      ><div className='content'>
          <h3>一、特别提示</h3>
          在此特别提醒您（用户）在注册成为系统用户之前，请认真阅读本《用户服务协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。<br/>
          <h3>二、账号注册</h3>
          1、用户在使用本服务前需要注册一个“系统”账号。“系统”账号应当使用邮箱绑定注册。系统可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。<br/>
          2、如果注册申请者有被封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由， 系统将拒绝其注册申请。<br/>
          3、鉴于“系统”账号的绑定注册方式，您同意系统在注册时将允许您的邮箱、姓名、单位等信息用于注册。<br/>
          <h3>三、账户安全</h3>
          1、用户一旦注册成功，成为系统的用户，将得到一个用户名和密码，并有权利使用自己的用户名及密码随时登陆系统系统及其第三方应用。<br/>
          2、用户对用户名和密码的安全负全部责任，同时对以其用户名进行的所有活动和事件负全责。<br/>
          3、用户不得以任何形式擅自转让或授权他人使用自己的系统账号。<br/>
          4、如果用户泄漏了密码，有可能导致不利的法律后果，因此不管任何原因导致用户的密码安全受到威胁，应该立即和系统客服人员取得联系，否则后果自负。<br/>
          5、本服务的设计和意图是供个人本人使用，用户不得与他人分享您的帐户或密码细节。在我们运用了合理的技能并尽到适当的审慎义务的条件下，如果因用户未遵守这些规则而导致用户的帐户未经授权而被使用，则对于由此引起的任何损失，系统不承担任何责任。<br/>
          <h3>四、用户声明与保证</h3>
          1、用户承诺其为具有完全民事行为能力的民事主体，且具有达成交易履行其义务的能力。<br/>
          2、用户有义务在注册时提供自己的真实资料，并保证诸如手机号码、姓名、邮箱等内容的有效性及安全性，保证系统的工作人员可以通过上述联系方式与用户取得联系。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。<br/>
          3、用户通过使用系统的过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复和相关链接页面，以及其他使用账号或本服务所产生的内容，不得违反国家相关法律制度，包含但不限于如下原则：<br/>
          （1）反对宪法所确定的基本原则的；<br/>
          （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br/>
          （3）损害国家荣誉和利益的；<br/>
          （4）煽动民族仇恨、民族歧视，破坏民族团结的；<br/>
          （5）破坏国家宗教政策，宣扬邪教和封建迷信的；<br/>
          （6）散布谣言，扰乱社会秩序，破坏社会稳定的；<br/>
          （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br/>
          （8）侮辱或者诽谤他人，侵害他人合法权益的；<br/>
          （9）含有法律、行政法规禁止的其他内容的。<br/>
          4、用户不得利用“系统”账号或本服务制作、上载、复制、发布、传播下干扰“系统”正常运营，以及侵犯其他用户或第三方合法权益的内容：<br/>
          （1）含有任何性或性暗示的；<br/>
          （2）含有辱骂、恐吓、威胁内容的；<br/>
          （3）含有骚扰、垃圾广告、恶意信息、诱骗信息的；<br/>
          （4）涉及他人隐私、个人信息或资料的；<br/>
          （5）侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；<br/>
          （6）含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。<br/>
          5、用户同意不因任何目的复制、拷贝、出售、转售、租赁或交易本服务（或其中任何部分）。<br/>
          <h3>五、著作权申明</h3>
          作为服务的一部分而提供的任何额外的服务均必须遵守本协议。作为本服务支持的一部分而提供的应用的著作权属于系统。用户仅能以支持应用为目的而使用该应用，但不能反向编译、反向工程、修改、出租该应用或制作该应用的派生品，除非相关法律允许。<br/>
          <h3>六、服务的终止</h3>
          1、在下列情况下，系统有权终止向用户提供服务：<br/>
          （1）在用户违反本服务协议相关规定时，系统有权终止向该用户提供服务。如该用户再一次直接或间接或以他人名义注册为用户的，一经发现，系统有权直接单方面终止向该用户提供服务；<br/>
          （2）如系统工作人员通过用户提供的信息与用户联系时，发现用户在注册时填写的联系方式已不存在或无法接通，工作人员以其它联系方式通知用户更改，而用户在三个工作日内仍未能提供新的联系方式，系统有权终止向该用户提供服务；<br/>
          （3）用户不得通过程序或人工方式进行刷量或作弊，若发现用户有作弊行为，系统将立即终止服务；<br/>
          （4）一旦系统工作人员发现用户提供的数据或信息中含有虚假内容，系统有权随时终止向该用户提供服务；<br/>
          （5）本服务条款终止或更新时，用户明示不愿接受新的服务条款； （6）其它系统工作人员认为需终止服务的情况。<br/>
          2、服务终止后，系统没有义务为用户保留原账号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给用户或第三方。<br/>
          <h3>七、免责声明</h3>
              系统不承诺服务或本服务指向的任何内容、服务或功能无任何错误或不中断，不承诺任何瑕疵将被纠正，或者用户对本服务的使用将产生特定结果。<br/>
              本服务及其内容是基于“现状”且“可获得”而提供。本服务提供的所有信息可不经通知而变更。系统不能确保用户通过本服务指向的其他应用下载的任何资料或其他数据无病毒、无污染或不具破坏性。系统不作任何明示或默示保证，包括任何正确性、非侵权、适销性及适用性的保证。对于任何及所有与用户对本网站和任何本服务的使用有关的任何第三方的作为、不作为和行为，系统概不承担责任。用户对本服务及任何链接网站应用的使用，由您承担全部责任。如用户对本服务或任何内容有任何不满意，您唯一的救济方式是停止使用本服务或任何该等内容。救济限制是双方协议的一部分。<br/>
              上述免责声明适用于因任何不履行、错误、疏忽、中断、删除、缺陷、操作或传输迟延、电脑病毒、通信线路故障、失窃或破坏或未经授权访问、篡改或使用 (无论是违约、侵权、过失或任何其他诉因) 而造成的任何损害、责任或伤害。<br/>
      </div>
          </Modal>
          </>
  );
};

export default App;