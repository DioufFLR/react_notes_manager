import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";

export function App() {
  return (
      <div className='container-fluid'>
        <Header />
        <Outlet />
      </div>
  )
}
