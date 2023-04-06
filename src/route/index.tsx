// console.log(location,'location')

const routes=[
    { path: '/', redirect: '/student/baseInfo' },

{
  name:'学生基本信息',
  path:'/student/baseInfo',
  component:'./Student/BaseInfo'
},

{
 name:'教评查询',
 path:'/student/ecaluationList',
 component:'./Student/EvaluaitionList' 
},
{
  name:'进行教师教评',
  path:'/student/teacherEcaluation',
  component:'./Student/TeacherEvaluation' 
},

{
  name:'老师基本信息',
  path:'/teacher/baseInfo',
  component:'./Teacher/TeacherBaseInfo'
},
{
  name:'查询教评',
  path:'/teacher/evaluation',
  component:'./Teacher/TeacherEvaluation'
},
{
  name:'学生管理',
  path:'/admins/managementStudent',
  component:'./Admins/ManagementStudent'
},
{
  name:'教师管理',
  path:'/admins/mangementTeacher',
  component:'./Admins/ManagementTeacher'
},
// {
//   name:'统计管理',
//   path:'/admins/statistics',
//   component:'./Admins/Statistics'
// },
  {
    path:'/login',
    component:'./Login',
    layout: false 
  },
  {
    path:'/register',
    component:'./Register',
    layout: false 
  },
  { path: '/*', component: '@/pages/404' },
  ]
  export default routes