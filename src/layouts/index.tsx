import { useLocation, Outlet } from 'umi';
import Login from '@/pages/Login/index'
 
export default function() {
  const location = useLocation();
  console.log(location,'location')
  if (location.pathname === '/login') {
    return <Login></Login>
  }
 
  // 使用 `useAppData` / `useSelectedRoutes` 可以获得更多路由信息
  // const { clientRoutes } = useAppData()
  // const routes = useSelectedRoutes()
 
  return (
    <>
      <Outlet />
    </>
  );
}