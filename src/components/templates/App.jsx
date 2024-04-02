import { Outlet } from "react-router-dom"
import { MainHeader } from "../pages/MainHeader"


const App = () => {
  return (
    <div><MainHeader/>
    <Outlet/>
    </div>
  )
}

export default App