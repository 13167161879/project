import {
    LockOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import {history} from 'umi'
  import {
    ProFormText,
    LoginForm  } from '@ant-design/pro-components';
  import {  Space } from 'antd';
  
  

  export default () => {
    const onFinish=()=>{
      const type=location.pathname.split('/')[1];
      if(type==='admins'){
        history.push('/admins/managementStudent')
        return 
      }
        history.push(`/${type}/baseInfo`)
    }
      return (
        <>
          < LoginForm
          onFinish={onFinish}
            title="登陆"
            subTitle="欢迎登陆"
            actions={
              <Space>
               没有账号？<a href='/register'>去注册</a>
              </Space>
            }
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'请输入账号'}
              rules={[
                {
                  required: true,
                  message: '请输入账号!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'请输入密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </LoginForm>
        </>
      );
  };