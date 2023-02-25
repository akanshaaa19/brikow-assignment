import { Link } from 'react-router-dom';
import logo from '../../../images/logo-sm.png'

function Collapsed (){
   return <section className="collapsed-sidebar h-screen overflow-auto fixed left-0 bg-white z-5 flex flex-col">
    <Link className="py-7" to="/">
        <img src={logo} height="22" width="22" className="mx-auto" />
      </Link>
   </section>;
}
 
export default Collapsed