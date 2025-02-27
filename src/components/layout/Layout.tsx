import SideBarNav from './SideBarNav';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className=" app-scrollbar  flex font-Inter">
      <SideBarNav />
      <main className=" md:p-7 bg-[#F5F7FA]   pt-[100px] md:pt-[120px] w-full">
        <Outlet />
      </main>
    </div>
  );
}
