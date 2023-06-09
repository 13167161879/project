// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import Login from '@/pages/Login/index';
import {studentMenu,teacherMenu,adminsMenu} from '@/route/index'
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  const type=location.pathname.split('/')[1];
  const route:any={
    admins:adminsMenu,
   student:studentMenu,
   teacher:teacherMenu
  }
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logout: () => {
      return 'ss'
    },
    dark:true,
    rightRender:()=>{
return Login
    },
    menuDataRender:() =>route[type],
    // children:(a)=>{
    // console.log(a,'a')
    //   return
    // }
    // menu: {
    //   locale: false,
    // },
  };
};
