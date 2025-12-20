import WebNavbar from "@/components/common/navbar/WebNavbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div>
         <WebNavbar />
         <Outlet />
    </div>
  )
}

export default MainLayout