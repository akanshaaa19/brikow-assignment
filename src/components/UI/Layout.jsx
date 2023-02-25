import Dashboard from "../pages/Dashboard";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";

function Layout (props){
   return <>
   <Sidebar/>
   <Header />
   {props.children}
   </>;
}
 
export default Layout